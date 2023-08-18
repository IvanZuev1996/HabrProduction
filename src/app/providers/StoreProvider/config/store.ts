import {
    CombinedState,
    configureStore,
    getDefaultMiddleware,
    Reducer,
    ReducersMapObject
} from '@reduxjs/toolkit';
import { counterReducer } from '@/entities/Counter';
import { sidebarReducer } from '@/entities/Sidebar';
import { userReducer } from '@/entities/User';
import { uiReducer } from '@/features/UI';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';
import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        sidebar: sidebarReducer,
        ui: uiReducer,
        [rtkApi.reducerPath]: rtkApi.reducer
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraErg: ThunkExtraArg = {
        api: $api
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraErg
                }
            }).concat(rtkApi.middleware)
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
