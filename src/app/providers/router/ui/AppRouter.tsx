import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppRouteProps } from '@/shared/types/router';
import { PageLoader } from '@/widgets/PageLoader';

import { routeConfig } from '../config/routeConfig';

import { RequireAuth } from './RequireAuth';
import { RequireRoles } from './RequireRoles';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <RequireRoles roles={route.roles}>
                <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
            </RequireRoles>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
