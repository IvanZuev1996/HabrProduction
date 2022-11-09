import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames';
import { Comment } from 'entities/Comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
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
            <div className={classNames(cls.CommentCard, mods, [className])}>
                <div className={cls.header}>
                    <Skeleton border="50%" width={40} height={40} />
                    <Skeleton
                        width={100}
                        height={18}
                        border="5px"
                        className={cls.username}
                    />
                </div>
                <Skeleton
                    width="100%"
                    height={50}
                    border="5px"
                    className={cls.text}
                />
                <div />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment?.user.avatar ? (
                    <Avatar size={40} src={comment?.user.avatar} />
                ) : null}
                <Text
                    title={comment?.user.username}
                    size={TextSize.S}
                    className={cls.username}
                />
            </div>
            <Text
                title={comment?.text}
                size={TextSize.S}
                className={cls.text}
            />
        </div>
    );
});
