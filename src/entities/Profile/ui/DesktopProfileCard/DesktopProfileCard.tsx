import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/helpers/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { ValidateProfileError } from '../../model/consts/consts';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';

import cls from './DesktopProfileCard.module.scss';

type DesktopProfileCardProps = Omit<ProfileCardProps, 'isLoading' | 'error'>;

const DesktopProfileCard = memo((props: DesktopProfileCardProps) => {
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

    const mods: Mods = {
        [cls.editing]: !readonly
    };

    return (
        <VStack
            gap="8"
            max
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar src={data?.avatar} alt={t('avatar')} />
                </HStack>
            )}
            <HStack max className={cls.infoItem}>
                <Text text={t('Ваше имя')} className={cls.text} />
                <Input
                    value={data?.firstname}
                    placeholder={t('Ваше имя')}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                    data-testid="ProfileCard.Firstname"
                    className={classNames(
                        cls.input,
                        {
                            [cls.validateError]: validateErrors?.includes(
                                ValidateProfileError.INCORRECT_FIRSTNAME
                            )
                        },
                        []
                    )}
                />
            </HStack>
            <HStack max className={cls.infoItem}>
                <Text text={t('Ваша фамилия')} className={cls.text} />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    onChange={onChangeLastname}
                    readonly={readonly}
                    data-testid="ProfileCard.Lastname"
                    className={classNames(
                        cls.input,
                        {
                            [cls.validateError]: validateErrors?.includes(
                                ValidateProfileError.INCORRECT_LASTNAME
                            )
                        },
                        []
                    )}
                />
            </HStack>
            <HStack max className={cls.infoItem}>
                <Text text={t('Ваш возраст')} className={cls.text} />
                <Input
                    value={data?.age || ''}
                    placeholder={t('Ваш возраст')}
                    onChange={onChangeAge}
                    readonly={readonly}
                    data-testid="ProfileCard.Age"
                    className={classNames(
                        cls.input,
                        {
                            [cls.validateError]: validateErrors?.includes(
                                ValidateProfileError.INCORRECT_AGE
                            )
                        },
                        []
                    )}
                />
            </HStack>
            <HStack max className={cls.infoItem}>
                <Text text={t('Город')} className={cls.text} />
                <Input
                    value={data?.city}
                    placeholder={t('Город')}
                    onChange={onChangeCity}
                    readonly={readonly}
                    data-testid="ProfileCard.City"
                    className={classNames(
                        cls.input,
                        {
                            [cls.validateError]: validateErrors?.includes(
                                ValidateProfileError.INCORRECT_CITY
                            )
                        },
                        []
                    )}
                />
            </HStack>
            <HStack max className={cls.infoItem}>
                <Text text={t('Имя пользователя')} className={cls.text} />
                <Input
                    value={data?.username}
                    placeholder={t('Имя пользователя')}
                    onChange={onChangeUsername}
                    readonly={readonly}
                    data-testid="ProfileCard.Username"
                    className={classNames(
                        cls.input,
                        {
                            [cls.validateError]: validateErrors?.includes(
                                ValidateProfileError.INCORRECT_USERNAME
                            )
                        },
                        []
                    )}
                />
            </HStack>
            <HStack max className={cls.infoItem}>
                <Text text={t('Аватар')} className={cls.text} />
                <Input
                    value={
                        __PROJECT__ !== 'storybook'
                            ? data?.avatar
                            : 'hello storybook'
                    }
                    placeholder={t('Введите ссылку на аватар')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                    data-testid="ProfileCard.AvatarLink"
                />
            </HStack>
            <HStack max className={cls.infoItem}>
                <Text text={t('Укажите валюту')} className={cls.text} />
                <CurrencySelect
                    className={cls.select}
                    value={data?.currency}
                    readonly={readonly}
                    onChange={onChangeCurrency}
                />
            </HStack>
            <HStack max className={cls.infoItem}>
                <Text text={t('Укажите страну')} className={cls.text} />
                <CountrySelect
                    className={cls.select}
                    value={data?.country}
                    readonly={readonly}
                    onChange={onChangeCountry}
                />
            </HStack>
        </VStack>
    );
});

export default DesktopProfileCard;
