import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './Dropdown.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: string;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export const Dropdown = (props: DropdownProps) => {
    const { className, items, trigger, direction = 'bottom left' } = props;
    const menuClasses = [mapDirectionClass[direction]];
    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [
                className,
                popupCls.popup
            ])}
        >
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            disabled={item.disabled}
                            type="button"
                            className={classNames(cls.item, {
                                [cls.active]: active
                            })}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                                key={`${item.content} + ${index}`}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            disabled={item.disabled}
                            key={`${item.content} + ${index}`}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
