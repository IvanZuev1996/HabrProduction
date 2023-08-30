import { screen } from '@testing-library/react';

import { UserRole } from '@/entities/User';
import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteArticles,
    getRouteProfile
} from '@/shared/const/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import AppRouter from './AppRouter';

describe('app/router/AppRouter', () => {
    test('Страница должна отрендерится', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout()
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Страница не найдена', async () => {
        componentRender(<AppRouter />, {
            route: '/fewfwefwe'
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Редирект неавторизованного пользователя на главную', async () => {
        componentRender(<AppRouter />, {
            route: getRouteArticles()
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ к закрытой странице для авторизованного пользователя', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _inited: true,
                    authData: {
                        id: '1'
                    }
                }
            }
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ запрещен (отсутствуют необходимые роли у пользователя)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {
                        id: '1'
                    }
                }
            }
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ к закрытым страницам (есть необходимые роли у пользователя)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {
                        id: '1',
                        roles: [UserRole.ADMIN]
                    }
                }
            }
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
