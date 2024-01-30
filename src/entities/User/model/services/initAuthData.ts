import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

import { getUserDataByIdQuary } from '../../api/userApi';
import { User } from '../types/user';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkApi) => {
        const { dispatch, rejectWithValue } = thunkApi;

        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        if (!userId) {
            return rejectWithValue('No User');
        }

        try {
            const response = await dispatch(
                getUserDataByIdQuary(userId)
            ).unwrap();

            return response;
        } catch (e) {
            console.error(e);
            return rejectWithValue('Error');
        }
    }
);
