<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required',
            'email' => 'required|email:rfc,dns',
            'password' => 'sometimes',
            'leader' => 'required_unless:leader,null',
            'rolesFormGroup' => 'required',
            'position_id' => 'required',
            'subordinates' => 'nullable',
            'requirePassChange' => 'required_unless:requirePassChange,null',
            'valid_id' => 'required',
            'birthdate' => 'nullable'
        ];
    }
}
