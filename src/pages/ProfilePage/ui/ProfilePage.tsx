import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
    ValidateProfileError
} from 'entities/Profile';
import { memo, Suspense, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducerList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/helpers/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/Page';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducerList = {
    profile: profileReducer
};

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispath = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslations = {
        [ValidateProfileError.INCORRECT_AGE]: t('Введите корректное значение'),
        [ValidateProfileError.INCORRECT_CITY]: t('Поле является обязательным'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t(
            'Поле является обязательным'
        ),
        [ValidateProfileError.INCORRECT_CURRENCY]: t(
            'Поле является обязательным'
        ),
        [ValidateProfileError.INCORRECT_FIRSTNAME]: t(
            'Поле является обязательным'
        ),
        [ValidateProfileError.INCORRECT_LASTNAME]: t(
            'Поле является обязательным'
        ),
        [ValidateProfileError.INCORRECT_USERNAME]: t(
            'Поле является обязательным'
        ),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.SERVER_ERROR]: t(
            'Произошла непредвиденная ошибка'
        )
    };

    useInitialEffect(() => {
        if (id) {
            dispath(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispath(profileActions.updateProfile({ firstname: value || '' }));
        },
        [dispath]
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispath(profileActions.updateProfile({ lastname: value || '' }));
        },
        [dispath]
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispath(profileActions.updateProfile({ city: value || '' }));
        },
        [dispath]
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            dispath(profileActions.updateProfile({ age: Number(value || 0) }));
        },
        [dispath]
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispath(profileActions.updateProfile({ avatar: value || '' }));
        },
        [dispath]
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispath(profileActions.updateProfile({ username: value || '' }));
        },
        [dispath]
    );

    const onChangeCurrency = useCallback(
        (currency?: Currency) => {
            dispath(profileActions.updateProfile({ currency }));
        },
        [dispath]
    );

    const onChangeCountry = useCallback(
        (country?: Country) => {
            dispath(profileActions.updateProfile({ country }));
        },
        [dispath]
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterAnmount>
            <Page className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length &&
                    validateErrors.map((err) => (
                        <Text
                            theme={TextTheme.ERROR}
                            title={validateErrorTranslations[err]}
                        />
                    ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    validateErrors={validateErrors}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
