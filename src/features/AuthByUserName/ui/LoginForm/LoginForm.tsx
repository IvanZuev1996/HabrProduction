import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <p className={cls.loginTitle}>{t('LOGIN')}</p>
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите логин')}
                autoFocus
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
            />
            <Button theme={ButtonTheme.BACKGROUND} className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
