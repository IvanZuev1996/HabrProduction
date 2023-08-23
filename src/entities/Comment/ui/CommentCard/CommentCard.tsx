import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { routes } from '@/shared/const/router';
import { classNames, Mods } from '@/shared/lib/helpers/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';

import { Comment } from '../../model/types/comment';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;
    const { t } = useTranslation();

    const mods: Mods = {
        [cls.isLoading]: isLoading
    };

    if (isLoading) {
        return (
            <VStack
                max
                gap="8"
                className={classNames(cls.CommentCard, mods, [className])}
            >
                <div className={cls.header}>
                    <Skeleton border="50%" width={40} height={40} />
                    <Skeleton
                        width={100}
                        height={18}
                        border="5px"
                        className={cls.username}
                    />
                </div>
                <Skeleton width="100%" height={50} border="5px" />
                <div />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            max
            gap="8"
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink
                className={cls.header}
                to={routes.profile(comment.user.id)}
            >
                {comment.user.avatar ? (
                    <Avatar size={40} src={comment.user.avatar} />
                ) : null}
                <Text
                    title={comment.user.username}
                    size={TextSize.S}
                    className={cls.username}
                />
            </AppLink>
            <Text title={comment.text} size={TextSize.S} />
        </VStack>
    );
});
