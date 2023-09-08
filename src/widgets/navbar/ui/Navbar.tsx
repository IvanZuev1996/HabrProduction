import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getSidebarState, sidebarActions } from '@/entities/Sidebar';
import { getUserAuthData, userActions } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUserName';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationPopup } from '@/features/notificationPopup';
import MenuIcon from '@/shared/assets/icons/menu-icon.svg';
import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteArticleCreate,
    getRouteArticles,
    getRouteProfile
} from '@/shared/const/router';
import { classNames } from '@/shared/lib/helpers/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { AppLink } from '@/shared/ui/AppLink';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextSize, TextWeight } from '@/shared/ui/Text';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const { isOpen } = useSelector(getSidebarState);
    const dispatch = useAppDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const isMobileAgent = useDevice();

    const onOpenDrawer = useCallback(() => {
        setIsDrawerOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsDrawerOpen(false);
    }, []);

    const onLogout = useCallback(() => {
        onCloseDrawer();
        dispatch(userActions.logout());
    }, [dispatch, onCloseDrawer]);

    const onToggleSidebar = useCallback(() => {
        dispatch(sidebarActions.toggleState(!isOpen));
    }, [dispatch, isOpen]);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        onCloseDrawer();
        setIsAuthModal(true);
    }, [onCloseDrawer]);

    let drawerContent;

    if (authData) {
        drawerContent = (
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
                        <Button theme={ButtonTheme.CLEAR} size={ButtonSize.S}>
                            {t('Создать статью')}
                        </Button>
                    </AppLink>
                    <AppLink to={getRouteArticles()} className={cls.DrawerItem}>
                        <Button theme={ButtonTheme.CLEAR} size={ButtonSize.S}>
                            {t('Статьи')}
                        </Button>
                    </AppLink>
                    <AppLink
                        to={getRouteProfile(authData.id)}
                        className={cls.DrawerItem}
                    >
                        <Button theme={ButtonTheme.CLEAR} size={ButtonSize.S}>
                            {t('Профиль')}
                        </Button>
                    </AppLink>
                    <AppLink
                        to={getRouteAdminPanel()}
                        className={cls.DrawerItem}
                    >
                        <Button theme={ButtonTheme.CLEAR} size={ButtonSize.S}>
                            {t('Админ панель')}
                        </Button>
                    </AppLink>
                </VStack>
                <VStack
                    align="center"
                    justify="center"
                    className={cls.DrawerSection}
                >
                    <div onClick={onLogout} className={cls.DrawerItem}>
                        <Button
                            theme={ButtonTheme.CLEAR}
                            size={ButtonSize.S}
                            className={cls.DrawerItemRed}
                        >
                            {t('Выйти')}
                        </Button>
                    </div>
                </VStack>
            </VStack>
        );

        return (
            <header
                data-testid="navbar"
                className={classNames(cls.Navbar, {}, [className])}
            >
                {isMobileAgent && (
                    <Drawer
                        isOpen={isDrawerOpen}
                        onClose={onCloseDrawer}
                        background={false}
                        height={400}
                        lazy
                    >
                        {drawerContent}
                    </Drawer>
                )}
                <Button
                    data-testid="sidebar-toggle"
                    theme={ButtonTheme.CLEAR}
                    className={cls.button}
                    onClick={isMobileAgent ? onOpenDrawer : onToggleSidebar}
                >
                    <MenuIcon className={cls.menuIcon} />
                </Button>
                <Text
                    title={t('Habr Clone App')}
                    className={cls.appName}
                    size={TextSize.S}
                    weight={TextWeight.BOLD}
                />
                <div className={cls.articleCreateBlock}>
                    <AppLink
                        to={getRouteArticleCreate()}
                        className={cls.createArticle}
                    >
                        <Button theme={ButtonTheme.CLEAR} size={ButtonSize.S}>
                            {t('Создать статью')}
                        </Button>
                    </AppLink>
                    <HStack
                        gap="32"
                        align="center"
                        justify="center"
                        className={cls.actions}
                    >
                        <NotificationPopup />
                        <AvatarDropdown />
                    </HStack>
                </div>
            </header>
        );
    }

    drawerContent = (
        <VStack gap="8" max>
            <VStack
                className={cls.DrawerSection}
                align="center"
                justify="center"
                onClick={onCloseDrawer}
            >
                <AppLink to={getRouteAbout()} className={cls.DrawerItem}>
                    <Button theme={ButtonTheme.CLEAR} size={ButtonSize.S}>
                        {t('О нас')}
                    </Button>
                </AppLink>
                <div onClick={onShowModal} className={cls.DrawerItem}>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        size={ButtonSize.S}
                        className={cls.DrawerItemRed}
                    >
                        {t('Войти')}
                    </Button>
                </div>
            </VStack>
        </VStack>
    );

    return (
        <header
            className={classNames(cls.Navbar, {}, [className])}
            data-testid="navbar"
        >
            {isMobileAgent && (
                <Drawer
                    isOpen={isDrawerOpen}
                    onClose={onCloseDrawer}
                    background={false}
                    height={200}
                    lazy
                >
                    {drawerContent}
                </Drawer>
            )}
            <Button
                data-testid="sidebar-toggle"
                theme={ButtonTheme.CLEAR}
                className={cls.button}
                onClick={isMobileAgent ? onOpenDrawer : onToggleSidebar}
            >
                <MenuIcon className={cls.menuIcon} />
            </Button>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
