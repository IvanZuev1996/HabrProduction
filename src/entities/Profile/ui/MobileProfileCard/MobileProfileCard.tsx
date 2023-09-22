import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import EditIcon from '@/shared/assets/icons/edit-icon.svg';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextWeight } from '@/shared/ui/Text';

import { ProfileCardProps } from '../ProfileCard/ProfileCard';

import cls from './MobileProfileCard.module.scss';

type MobileProfileCardProps = Omit<ProfileCardProps, 'isLoading' | 'error'>;

const MobileProfileCard = memo((props: MobileProfileCardProps) => {
    const {
        className,
        data,
        onChangeAge,
        onChangeAvatar,
        onChangeCity,
        onChangeCountry,
        onChangeCurrency,
        onChangeFirstname,
        onChangeLastname,
        onChangeUsername,
        readonly,
        validateErrors
    } = props;
    const { t } = useTranslation();

    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.ProfileCard, {}, [className])}
        >
            {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar src={data?.avatar} alt={t('avatar')} />
                </HStack>
            )}
            <VStack max className={cls.infoItem} gap="8">
                <Text
                    title={t('Ваше имя')}
                    className={cls.text}
                    weight={TextWeight.BOLD}
                />
                <HStack max justify="between">
                    <Text
                        text={data?.firstname}
                        className={cls.infoItemValue}
                    />
                    <Icon Svg={EditIcon} width={30} height={30} />
                </HStack>
            </VStack>
            <VStack max className={cls.infoItem} gap="8">
                <Text title={t('Ваша фамилия')} className={cls.text} />
                <HStack max justify="between">
                    <Text text={data?.lastname} className={cls.infoItemValue} />
                    <Icon Svg={EditIcon} width={30} height={30} />
                </HStack>
            </VStack>
            <VStack max className={cls.infoItem} gap="8">
                <Text title={t('Ваш возраст')} className={cls.text} />
                <HStack max justify="between">
                    <Text
                        text={String(data?.age)}
                        className={cls.infoItemValue}
                    />
                    <Icon Svg={EditIcon} width={30} height={30} />
                </HStack>
            </VStack>
            <VStack max className={cls.infoItem} gap="8">
                <Text title={t('Город')} className={cls.text} />
                <HStack max justify="between">
                    <Text text={data?.city} className={cls.infoItemValue} />
                    <Icon Svg={EditIcon} width={30} height={30} />
                </HStack>
            </VStack>
            <VStack max className={cls.infoItem} gap="8">
                <Text title={t('Имя пользователя')} className={cls.text} />
                <HStack max justify="between">
                    <Text text={data?.username} className={cls.infoItemValue} />
                    <Icon Svg={EditIcon} width={30} height={30} />
                </HStack>
            </VStack>
            <VStack max className={cls.infoItem} gap="8">
                <Text title={t('Аватар')} className={cls.text} />
                <HStack max justify="between">
                    <Text text={data?.avatar} className={cls.infoItemValue} />
                    <Icon Svg={EditIcon} width={30} height={30} />
                </HStack>
            </VStack>
            <VStack max className={cls.infoItem} gap="8">
                <Text title={t('Укажите валюту')} className={cls.text} />
                <HStack max justify="between">
                    <Text text={data?.currency} className={cls.infoItemValue} />
                    <Icon Svg={EditIcon} width={30} height={30} />
                </HStack>
            </VStack>
            <VStack max className={cls.infoItem} gap="8">
                <Text title={t('Укажите страну')} className={cls.text} />
                <HStack max justify="between">
                    <Text text={data?.country} className={cls.infoItemValue} />
                    <Icon Svg={EditIcon} width={30} height={30} />
                </HStack>
            </VStack>
        </VStack>
    );
});

export default MobileProfileCard;
