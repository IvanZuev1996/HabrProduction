import {
    CreateSliceOptions,
    SliceCaseReducers,
    bindActionCreators,
    createSlice
} from '@reduxjs/toolkit';
import { useMemo } from 'react';

import { useAppDispatch } from '../hooks/useAppDispatch/useAppDispatch';

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
    const slice = createSlice(options);

    const useActions = (): typeof slice.actions => {
        const dispatch = useAppDispatch();

        return useMemo(
            () => bindActionCreators<any, any>(slice.actions, dispatch),
            [dispatch]
        );
    };

    return {
        ...slice,
        useActions
    };
}
