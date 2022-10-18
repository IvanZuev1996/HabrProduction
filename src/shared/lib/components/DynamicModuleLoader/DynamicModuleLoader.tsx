import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    children: ReactNode;
    removeAfterAnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { reducers, children, removeAfterAnmount } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([name, reducer]: ReducersListEntry) => {
                store.reducerManager.add(name, reducer);
                dispatch({ type: `@INIT ${name} Reducer` });
            }
        );

        return () => {
            if (removeAfterAnmount) {
                Object.entries(reducers).forEach(
                    ([name]: ReducersListEntry) => {
                        store.reducerManager.remove(name);
                        dispatch({ type: `@DESTROY ${name} Reducer` });
                    }
                );
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
