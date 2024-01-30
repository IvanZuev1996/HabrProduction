import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';

import { initAuthData } from '../services/initAuthData';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
    _inited: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
            localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                saveJsonSettings.fulfilled,
                (state, action: PayloadAction<JsonSettings>) => {
                    if (!state.authData) {
                        return;
                    }

                    state.authData.jsonSettings = action.payload;
                }
            )
            .addCase(
                initAuthData.fulfilled,
                (state, { payload }: PayloadAction<User>) => {
                    state.authData = payload;
                    setFeatureFlags(payload.features);
                    state._inited = true;
                }
            )
            .addCase(initAuthData.rejected, (state) => {
                state._inited = true;
            });
    }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
