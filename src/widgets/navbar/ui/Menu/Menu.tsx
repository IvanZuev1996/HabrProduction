import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { userActions } from '@/entities/User';
import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteArticleCreate,
    getRouteArticles,
    getRouteMain,
    getRouteProfile
} from '@/shared/const/router';
import { classNames } from '@/shared/lib/helpers/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppLink } from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';

import cls from './Menu.module.scss';

interface MenuProps {
    onCloseDrawer?: () => void;
    onShowModal?: () => void;
    userId?: string;
}

export const Menu = memo((props: MenuProps) => {
    const { onCloseDrawer, userId, onShowModal } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const onLogout = useCallback(() => {
        if (onCloseDrawer) {
            onCloseDrawer();
        }
        dispatch(userActions.logout());
    }, [dispatch, onCloseDrawer]);

    if (userId) {
        return (
            <VStack gap="8" max>
                <VStack
                    className={cls.DrawerSection}
                    align="center"
                    justify="center"
                    onClick={onCloseDrawer}
                >
                    <AppLink
                        to={getRouteArticleCreate()}
                        className={cls.DrawerItem}
                    >
                        {t('Создать статью')}
                    </AppLink>
                    <AppLink to={getRouteArticles()} className={cls.DrawerItem}>
                        {t('Статьи')}
                    </AppLink>
                    <AppLink
                        to={getRouteProfile(userId)}
                        className={cls.DrawerItem}
                    >
                        {t('Профиль')}
                    </AppLink>
                    <AppLink
                        to={getRouteAdminPanel()}
                        className={cls.DrawerItem}
                    >
                        {t('Админ панель')}
                    </AppLink>
                </VStack>
                <VStack
                    align="center"
                    justify="center"
                    className={cls.DrawerSection}
                >
                    <div
                        onClick={onLogout}
                        className={classNames(cls.DrawerItem, {}, [
                            cls.DrawerItemRed
                        ])}
                    >
                        {t('Выйти')}
                    </div>
                </VStack>
            </VStack>
        );
    }

    return (
        <VStack gap="8" max>
            <VStack
                className={cls.DrawerSection}
                align="center"
                justify="center"
                onClick={onCloseDrawer}
            >
                <AppLink to={getRouteMain()} className={cls.DrawerItem}>
                    {t('Главная')}
                </AppLink>
                <AppLink to={getRouteAbout()} className={cls.DrawerItem}>
                    {t('О сайте')}
                </AppLink>
                <div
                    onClick={onShowModal}
                    className={classNames(cls.DrawerItem, {}, [
                        cls.DrawerItemRed
                    ])}
                >
                    {t('Войти')}
                </div>
            </VStack>
        </VStack>
    );
});
