/* eslint-disable i18next/no-literal-string */
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import MenuIcon from 'shared/assets/icons/menu-icon.svg';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
    onToggleSidebar?: () => void;
}

export const Navbar = memo(({ className, onToggleSidebar }: NavbarProps) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header
                data-testid="navbar"
                className={classNames(cls.Navbar, {}, [className])}
            >
                <Button
                    data-testid="sidebar-toggle"
                    theme={ButtonTheme.CLEAR}
                    className={cls.button}
                    onClick={onToggleSidebar}
                >
                    <MenuIcon className={cls.menuIcon} />
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </header>
        );
    }

    return (
        <header
            className={classNames(cls.Navbar, {}, [className])}
            data-testid="navbar"
        >
            <Button
                data-testid="sidebar-toggle"
                theme={ButtonTheme.CLEAR}
                className={cls.button}
                onClick={onToggleSidebar}
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
