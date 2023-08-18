import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames';
import cls from './ProfileRating.module.scss';
import { RatingCard } from '@/entities/Rating';
import { useProfileRating, useRateProfile } from '../../api/profileRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { getProfileData } from '@/features/editableProfileCard';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const profile = useSelector(getProfileData);
    const [rateProfileMutation] = useRateProfile();

    const { data, isLoading } = useProfileRating({
        profileId,
        userId: userData?.id ?? ''
    });

    const rating = data?.[0];

    const onAccept = useCallback(
        (startsCount: number, feedback?: string) => {
            try {
                rateProfileMutation({
                    userId: userData?.id ?? '',
                    profileId,
                    rate: startsCount,
                    feedback
                });
            } catch (error) {
                console.log(error);
            }
        },
        [profileId, rateProfileMutation, userData?.id]
    );

    if (isLoading) {
        return <Skeleton width="100%" height={150} />;
    }

    if (profileId === userData?.id || !profile) {
        return null;
    }

    return (
        <RatingCard
            className={classNames(cls.ProfileRating, {}, [className])}
            title={t('Вы можете поставить оценку этому профилю')}
            feedbackTitle={t(
                'Также можете оставить свой отзыв о профиле. Это поможет нам стать лучше!'
            )}
            rate={rating?.rate}
            onAccept={onAccept}
            hasFeedback
        />
    );
});

export default ProfileRating;
