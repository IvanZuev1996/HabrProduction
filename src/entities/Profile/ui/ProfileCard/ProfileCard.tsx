import { useTranslation } from 'react-i18next';
import { Currency, CurrencySelect } from 'entities/Currency';
import { classNames, Mods } from 'shared/lib/helpers/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { ValidateProfileError } from 'features/editableProfileCard/model/consts/consts';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    validateErrors?: ValidateProfileError[];
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency?: Currency) => void;
    onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        validateErrors,
        onChangeAge,
        onChangeCity,
        onChangeFirstname,
        onChangeLastname,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack
                justify="center"
                max
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.isLoading
                ])}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                justify="center"
                max
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                />
            </HStack>
        );
    }

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
};
