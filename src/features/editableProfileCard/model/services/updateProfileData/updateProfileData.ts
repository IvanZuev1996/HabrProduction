import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const formData = getProfileForm(getState());

    const errors = validateProfileData(formData);

    if (errors.length) {
        return rejectWithValue(errors);
    }

    try {
        const response: AxiosResponse<Profile> = await extra.api.put<Profile>(
            `/profile/${formData?.id}`,
            formData
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
});
