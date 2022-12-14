import { useTranslation } from 'react-i18next';
import { Currency, CurrencySelect } from 'entities/Currency';
import { classNames, Mods } from 'shared/lib/helpers/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Country, CountrySelect } from 'entities/Country';
import { Profile, ValidateProfileError } from '../../model/types/profile';
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
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.isLoading
                ])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('?????????????????? ???????????? ?????? ???????????????? ??????????????')}
                    text={t('???????????????????? ???????????????? ????????????????')}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <div className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} alt={t('avatar')} />
                </div>
            )}
            <div className={cls.infoItem}>
                <Text text={t('???????? ??????')} className={cls.text} />
                <Input
                    value={data?.firstname}
                    placeholder={t('???????? ??????')}
                    onChange={onChangeFirstname}
                    readonly={readonly}
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
            </div>
            <div className={cls.infoItem}>
                <Text text={t('???????? ??????????????')} className={cls.text} />
                <Input
                    value={data?.lastname}
                    placeholder={t('???????? ??????????????')}
                    onChange={onChangeLastname}
                    readonly={readonly}
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
            </div>
            <div className={cls.infoItem}>
                <Text text={t('?????? ??????????????')} className={cls.text} />
                <Input
                    value={data?.age || ''}
                    placeholder={t('?????? ??????????????')}
                    onChange={onChangeAge}
                    readonly={readonly}
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
            </div>
            <div className={cls.infoItem}>
                <Text text={t('??????????')} className={cls.text} />
                <Input
                    value={data?.city}
                    placeholder={t('??????????')}
                    onChange={onChangeCity}
                    readonly={readonly}
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
            </div>
            <div className={cls.infoItem}>
                <Text text={t('?????? ????????????????????????')} className={cls.text} />
                <Input
                    value={data?.username}
                    placeholder={t('?????? ????????????????????????')}
                    onChange={onChangeUsername}
                    readonly={readonly}
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
            </div>
            <div className={cls.infoItem}>
                <Text text={t('????????????')} className={cls.text} />
                <Input
                    value={
                        __PROJECT__ !== 'storybook'
                            ? data?.avatar
                            : 'hello storybook'
                    }
                    placeholder={t('?????????????? ???????????? ???? ????????????')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
            </div>
            <div className={cls.infoItem}>
                <Text text={t('?????????????? ????????????')} className={cls.text} />
                <CurrencySelect
                    className={cls.select}
                    value={data?.currency}
                    readonly={readonly}
                    onChange={onChangeCurrency}
                />
            </div>
            <div className={cls.infoItem}>
                <Text text={t('?????????????? ????????????')} className={cls.text} />
                <CountrySelect
                    className={cls.select}
                    value={data?.country}
                    readonly={readonly}
                    onChange={onChangeCountry}
                />
            </div>
        </div>
    );
};
