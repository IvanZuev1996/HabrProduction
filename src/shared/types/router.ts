/* eslint-disable babun4ek-fsd-plugin/layer-imports-checker */
import { RouteProps } from 'react-router-dom';

import { UserRole } from '@/entities/User';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
