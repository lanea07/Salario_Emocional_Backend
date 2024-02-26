<?php

namespace App\Services;

use App\Enums\BenefitDecisionEnum;
use App\Events\BenefitDecisionEvent;
use App\Events\NewBenefitUserWithLeaderEvent;
use App\Events\NewBenefitUserWithoutLeaderEvent;
use App\Mail\BenefitUserExcelExport;
use App\Models\Benefit;
use App\Models\BenefitUser;
use App\Models\User;
use App\Models\ViernesCorto;
use Carbon\Carbon;
use DateTime;
use DateTimeZone;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Spatie\IcalendarGenerator\Components\Calendar;
use Spatie\IcalendarGenerator\Components\Event;
use Spatie\IcalendarGenerator\Properties\TextProperty;

class BenefitUserService
{

    /**
     * Returns all the benefits of a user
     * 
     * @param int $userId
     * @param int $year
     * @return Collection
     */
    public function getAllBenefitUser(int $userId, int $year): Collection
    {
        return User::with(
            [
                'benefit_user' => function ($q) use ($year) {
                    $q->is_approved();
                    $q->whereYear('benefit_begin_time', $year);
                    $q->orderBy('benefit_begin_time');
                },
                'benefit_user.benefits',
                'benefit_user.benefit_detail',
                'benefit_user.user.dependency'
            ]
        )
            ->where('id', $userId)
            ->get();
    }

    /**
     * Saves a new benefit for a user
     * 
     * @param array $benefitUserData
     * @return BenefitUser
     */
    public function saveBenefitUser(array $benefitUserData): BenefitUser
    {
        $created = DB::transaction(function () use ($benefitUserData) {
            $requestedBenefit = Benefit::find($benefitUserData['benefit_id']);
            $bancoHoras = new Collection();
            $miViernes = new Collection();

            // Get the class name of the requested benefit
            $requestedBenefit = $this->getSpecificBenefitModel($requestedBenefit->name);
            $requestedBenefit->canCreate($benefitUserData);
            $benefitUserData = BenefitUser::create($benefitUserData);
            $benefitUserData = $benefitUserData->load(['user', 'benefits', 'benefit_detail', 'user.leader_user']);

            //Get additional benefits info
            if ($requestedBenefit->name === 'Mi Banco de Horas') {
                $bancoHoras = $this->getAdditionalBancoHoras($benefitUserData);
            }
            if ($requestedBenefit->name === 'Mi Viernes') {
                $miViernes = $this->getAdditionalMiViernes($benefitUserData);
            }

            $data = [$benefitUserData, $bancoHoras, $miViernes];
            if ($benefitUserData->user->leader_user !== null) {
                $leader = $benefitUserData->user->leader_user;
                if ($leader->settings()->get('Auto Aprobar Beneficios de mis Colaboradores') === 'Sí') {
                    $this->decideBenefitUser('approve', "Aprobado automáticamente", $benefitUserData);
                } else {
                    event(new NewBenefitUserWithLeaderEvent($benefitUserData->user, $data));
                }
            } else {
                $benefitUserData->is_approved = BenefitDecisionEnum::APPROVED->value;
                $benefitUserData->approved_at = Carbon::now();
                $benefitUserData->approved_by = auth()->user()->id;
                $benefitUserData->save();
                event(new NewBenefitUserWithoutLeaderEvent($benefitUserData->user, $benefitUserData));
            }
            return $benefitUserData;
        });
        return $created;
    }

    /**
     * Returns a benefit by its ID
     * 
     * @param BenefitUser $benefitUser
     * @return Collection
     */
    public function getBenefitUserByID(BenefitUser $benefitUser): Collection
    {
        return User::with(
            [
                'benefit_user' => function ($q) use ($benefitUser) {
                    $q->where('id', $benefitUser->id);
                    $q->orderBy('benefit_begin_time');
                },
                'benefit_user.benefits',
                'benefit_user.benefit_detail',
                'benefit_user.user.dependency'
            ]
        )->wherehas('benefit_user', function ($q) use ($benefitUser) {
            $q->where('id', '=', $benefitUser->id);
            $q->orderBy('benefit_begin_time');
        })->get();
    }

    /**
     * Updates a benefit for a user
     * 
     * @param array $benefitUserData
     * @param BenefitUser $benefitUser
     * @return BenefitUser
     */
    public function updateBenefitUser(array $benefitUserData, BenefitUser $benefitUser): BenefitUser
    {
        $updated = DB::transaction(function () use ($benefitUserData, $benefitUser) {
            $requestedBenefit = Benefit::find($benefitUserData['benefit_id']);

            // Get the class name of the requested benefit
            $requestedBenefit = $this->getSpecificBenefitModel($requestedBenefit->name);
            $requestedBenefit->canUpdate($benefitUserData, $benefitUser);
            $benefitUser->update($benefitUserData);
            return $benefitUser;
        });
        return $updated;
    }

    /**
     * Deletes a benefit for a user
     * 
     * @param BenefitUser $benefitUser
     * @return void
     */
    public function deleteBenefitUser(BenefitUser $benefitUser): void
    {
        DB::transaction(function () use ($benefitUser) {
            $benefitUser->delete();
        });
    }

    /**
     * Returns all the benefits of a user that are not approved
     * 
     * @param int $userId
     * @return Collection
     */
    public function getAllBenefitUserNonApproved(int $userId): Collection
    {
        return User::with(
            [
                'benefit_user' => function ($q) {
                    $q->where('is_approved', false);
                    $q->orderBy('benefit_begin_time');
                },
                'benefit_user.benefits',
                'benefit_user.benefit_detail',
                'benefit_user.user.dependency'
            ]
        )
            ->where('id', $userId)
            ->get();
    }

    /**
     * Returns all the benefits of users that are not approved
     * 
     * @param Request $request
     * @return Collection
     */
    public function getAllBenefitCollaboratorsNonApproved(Request $request): Collection
    {
        $user = $request->user();
        return BenefitUser::withWhereHas(
            'user',
            function ($q) use ($user) {
                $q->with('descendantsAndSelf');
            },
        )
            ->with(['benefits', 'benefit_detail'])
            ->whereRelation('user', function ($q) use ($user) {
                $q->where('leader', '=', $user->id);
            })
            ->is_pending()
            ->get();
    }

    /**
     * Returns all the benefits of user descendants and self
     * 
     * @param Request $request
     * @return Collection
     */
    public function getAllBenefitCollaborators(Request $request)
    {
        $user = $request->user();
        return User::where('id', '=', $user->id)
            ->with(
                [
                    'descendantsAndSelf.benefit_user' => function ($q) use ($request) {
                        $q->whereYear('benefit_begin_time', $request->year);
                        $q->is_approved();
                    },
                    'descendantsAndSelf.benefit_user.benefits',
                    'descendantsAndSelf.benefit_user.user',
                    'descendantsAndSelf.benefit_user.benefit_detail',
                ]
            )
            ->oldest('name')
            ->get();
    }

    /**
     * Returns an *.ics file to be attached to the new benefit
     * 
     * @param BenefitUser $benefitUser
     * @return object
     */
    static function generateICS(BenefitUser $benefitUser)
    {
        $event = Calendar::create($benefitUser->user->email)->event([
            Event::create()
                ->name($benefitUser->benefits->name)
                ->createdAt(new DateTime(Carbon::now()))
                ->startsAt(new DateTime($benefitUser->benefit_begin_time, new DateTimeZone('America/Bogota')))
                ->endsAt(new DateTime($benefitUser->benefit_end_time, new DateTimeZone('America/Bogota')))
                ->appendProperty(
                    TextProperty::create('X-MICROSOFT-CDO-BUSYSTATUS', 'OOF')
                )
        ]);
        return $event->get();
    }

    /**
     * Decides if a benefit is approved or rejected
     * 
     * @param string $decision
     * @param string $decision_comment
     * @param BenefitUser $benefitUser
     * @return BenefitUser
     */
    public function decideBenefitUser(
        string $decision,
        string $decision_comment = null,
        BenefitUser $benefitUser,
    ) {
        $decision = DB::transaction(function () use ($decision, $decision_comment, $benefitUser) {
            switch ($decision) {
                case 'approve':
                    $benefitUser->is_approved = BenefitDecisionEnum::APPROVED->value;
                    break;
                case 'reject':
                    $benefitUser->is_approved = BenefitDecisionEnum::DENIED->value;
                    break;
                default:
                    throw new Exception("No se pudo reconocer la acción. Intente más tarde", 1);
                    break;
            }
            $benefitUser->approved_at = Carbon::now();
            $benefitUser->approved_by = auth()->user()->id;
            $benefitUser->decision_comment = $decision_comment;

            if ($this->getSpecificBenefitModel($benefitUser->benefits->name) instanceof ViernesCorto && $decision === 'approve') {
                $month = date("M", strtotime($benefitUser['benefit_begin_time']));
                $year = date("Y", strtotime($benefitUser['benefit_begin_time']));
                $firstFridayMonth = new Carbon("first friday of {$month} {$year}");
                $firstFridayMonth = $firstFridayMonth->addHours(13)->addMinute(30);
                $benefitUser->benefit_begin_time = $firstFridayMonth->format('Y-m-d H:i:s');
                $benefitUser->benefit_end_time = $firstFridayMonth->addHours(3)->addMinutes(30)->format('Y-m-d H:i:s');

                $secondBenefit = new BenefitUser();
                $secondBenefit->forceFill($benefitUser->only([
                    'benefit_id',
                    'benefit_detail_id',
                    'user_id',
                    'is_approved',
                    'approved_at',
                    'request_comment',
                    'decision_comment',
                ]));
                $secondBenefit->created_at = $benefitUser->created_at;
                $secondBenefit->approved_at = Carbon::now();
                $lastFridayMonth = new Carbon("last friday of {$month} {$year}");
                $lastFridayMonth = $lastFridayMonth->addHours(13)->addMinute(30);
                $secondBenefit->benefit_begin_time = $lastFridayMonth->format('Y-m-d H:i:s');
                $secondBenefit->benefit_end_time = $lastFridayMonth->addHours(3)->addMinutes(30)->format('Y-m-d H:i:s');
                $secondBenefit->save();
            }   
            
            $benefitUser->save();
            event(new BenefitDecisionEvent($benefitUser));
            return $benefitUser;
        });
        return $decision;
    }

    /**
     * Exports the benefits of a user and descendants to an Excel file and mails it
     * 
     * @param Request $request
     * @return void
     */
    public function exportBenefits(Request $request)
    {
        $year = $request->years;
        $user_id = auth()->user()->id;
        $data = ['year' => $year, 'user_id' => $user_id];
        Mail::to(auth()->user()->email)->queue(new BenefitUserExcelExport($data));
    }

    /**
     * Returns all the additional Banco de Horas benefits of a user
     * 
     * @param BenefitUser $benefitUserData
     * @return Collection
     */
    private function getAdditionalBancoHoras(BenefitUser $benefitUserData): Collection
    {
        return BenefitUser::with(['benefit_detail'])->where(
            function ($q) use ($benefitUserData) {
                $q->where('user_id', $benefitUserData->user_id);
                $q->where('benefit_id', $benefitUserData->benefit_id);
                $q->where('id', '<>', $benefitUserData->id);
                $q->whereYear('benefit_begin_time', date("Y", strtotime($benefitUserData['benefit_begin_time'])));
                $q->is_Approved();
            }
        )
            ->orderBy('benefit_begin_time')
            ->get();
    }

    /**
     * Returns all the additional Mi Viernes benefits of a user
     * 
     * @param BenefitUser $benefitUserData
     * @return Collection
     */
    private function getAdditionalMiViernes(BenefitUser $benefitUserData): Collection
    {
        return BenefitUser::where(
            function ($q) use ($benefitUserData) {
                $q->where('user_id', $benefitUserData->user_id);
                $q->where('benefit_id', $benefitUserData->benefit_id);
                $q->where('id', '<>', $benefitUserData->id);
                $q->whereYear('benefit_begin_time', date("Y", strtotime($benefitUserData['benefit_begin_time'])));
                $q->is_Approved();
            }
        )
            ->orderBy('benefit_begin_time')
            ->get();
    }

    /**
     * Returns the class of a specific benefit
     * 
     * @param string $benefitName
     * @return mixed
     */
    public function getSpecificBenefitModel(string $benefitName): mixed
    {
        try {
            $className = str_replace([' ', 'ñ', 'Ñ'], ['', 'n', 'N'], ucwords($benefitName));
            $className = '\\App\\Models\\' . remove_accents($className);
            return (new $className)->first();
        } catch (\Throwable $th) {
            throw new Exception("No se pudo encontrar la clase del beneficio");
        }
    }
}
