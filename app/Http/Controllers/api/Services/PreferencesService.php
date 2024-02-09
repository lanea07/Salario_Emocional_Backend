<?php

namespace App\Http\Controllers\api\Services;

use App\Models\User;
use Illuminate\Support\Collection;

class PreferencesService
{
    /**
     * Returns all available preferences for User model
     * 
     * @return Collection
     */
    public function getAllAvailablePreferences(): Collection
    {
        return collect([(new User)->allowedSetting()]);;
    }

    /**
     * Returns all preferences for the authenticated user
     * 
     * @param User $user
     * @return Collection
     */
    public function userPreferences(User $user): Collection
    {
        return collect([$user->allSettings()]);
    }
}
