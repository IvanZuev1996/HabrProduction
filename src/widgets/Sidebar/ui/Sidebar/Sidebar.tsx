import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher';
import { getSidebarState } from '@/entities/Sidebar';
import { VStack } from '@/shared/ui/Stack';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const { isOpen } = useSelector(getSidebarState);
    const sidebarItemsList = useSelector(getSidebarItems);

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem item={item} collapsed={isOpen} key={item.path} />
            )),
        [isOpen, sidebarItemsList]
    );

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: isOpen }, [
                className
            ])}
        >
            <VStack role="navigation" gap="8" className={cls.items}>
                {itemsList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={isOpen} />
            </div>
        </aside>
    );
});
