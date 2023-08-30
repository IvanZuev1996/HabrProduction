import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SidebarSchema } from '../types/sidebar';

const initialState: SidebarSchema = {
    isOpen: false
};

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleState: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        }
    }
});

export const { actions: sidebarActions } = sidebarSlice;
export const { reducer: sidebarReducer } = sidebarSlice;
