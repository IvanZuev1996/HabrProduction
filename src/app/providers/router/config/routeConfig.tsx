import { UserRole } from '@/entities/User';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleCreatePage } from '@/pages/ArticleCreatePage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { AppRoutes, routes } from '@/shared/const/router';
import { AppRouteProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: routes.main(),
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: routes.about(),
        element: <AboutPage />
    },
    [AppRoutes.PROFILE]: {
        path: routes.profile(':id'),
        element: <ProfilePage />,
        authOnly: true
    },
    [AppRoutes.ARTICLES]: {
        path: routes.articles(),
        element: <ArticlesPage />,
        authOnly: true
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: routes.article_details(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: routes.article_create(),
        element: <ArticleCreatePage />,
        authOnly: true
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: routes.article_edit(':id'),
        element: <ArticleEditPage />,
        authOnly: true
    },
    [AppRoutes.ADMIN_PANEl]: {
        path: routes.admin_panel(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER]
    },
    [AppRoutes.FORBIDDEN]: {
        path: routes.forbidden(),
        element: <ForbiddenPage />
    },
    // last route
    [AppRoutes.NOT_FOUND]: {
        path: routes.not_found(),
        element: <NotFoundPage />
    }
};
