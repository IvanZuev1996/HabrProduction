import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useSelector } from 'react-redux';
import { getSidebarState } from 'entities/Sidebar';
import { memo, useMemo } from 'react';
import { SidebarItemsList } from '../../model/items';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
    isOpen?: boolean;
}

export const Sidebar = memo(({ className, isOpen = true }: SidebarProps) => {
    // const { isOpen } = useSelector(getSidebarState);
    const { t } = useTranslation();

    const itemsList = useMemo(
        () =>
            SidebarItemsList.map((item) => (
                <SidebarItem item={item} collapsed={isOpen} key={item.path} />
            )),
        [isOpen]
    );

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: isOpen }, [
                className
            ])}
        >
            <div className={cls.items}>{itemsList}</div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={isOpen} />
            </div>
        </div>
    );
});
