import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer
} from 'entities/Profile';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducerList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/helpers/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
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
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => {
        dispath(fetchProfileData());
    }, [dispath]);

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
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
