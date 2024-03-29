import { memo } from 'react';

import DarkIcon from '@/shared/assets/icons/theme-dark-2.svg';
import LightIcon from '@/shared/assets/icons/theme-light-2.svg';
import { Theme } from '@/shared/const/theme';
import { classNames } from '@/shared/lib/helpers/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.icon, {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
