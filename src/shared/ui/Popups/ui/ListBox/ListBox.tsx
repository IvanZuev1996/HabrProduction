import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/helpers/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import CompleteIcon from '../../../../assets/icons/complete-icon.svg';
import { Button, ButtonTheme } from '../../../Button/Button';
import { Icon } from '../../../Icon/Icon';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
    max?: boolean;
}

export function ListBox(props: ListBoxProps) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        max,
        label,
        direction = 'bottom left'
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    const listBoxMods: Mods = {
        [cls.readonly]: readonly
    };

    return (
        <>
            {label && <span className={cls.label}>{label}</span>}
            <HListBox
                as="div"
                disabled={readonly}
                className={classNames(cls.ListBox, listBoxMods, [
                    className,
                    popupCls.popup
                ])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button className={cls.trigger} as="div">
                    <Button
                        disabled={readonly}
                        theme={ButtonTheme.OUTLINE}
                        border="8"
                        justify="start"
                        max
                    >
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(
                        cls.options,
                        { [cls.max]: max },
                        optionsClasses
                    )}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {({ active, selected, disabled }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [cls.selectedItem]: selected,
                                        [cls.activeItem]: active,
                                        [cls.disabledItem]: disabled
                                    })}
                                >
                                    <HStack gap="8" max>
                                        {selected && (
                                            <Icon
                                                Svg={CompleteIcon}
                                                width="30"
                                                fill="additional"
                                            />
                                        )}
                                        {item.content}
                                    </HStack>
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </>
    );
}
