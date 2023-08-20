import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/consts/articleConsts';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        if (view === ArticleView.BIG) {
            return (
                <div className={classNames('', {}, [className, cls[view]])}>
                    <Card className={cls.card}>
                        <div className={cls.header}>
                            <Skeleton width={30} height={30} border="50%" />
                            <Skeleton
                                width={150}
                                height={16}
                                border="6px"
                                className={cls.username}
                            />
                            <Skeleton
                                width={150}
                                height={16}
                                border="6px"
                                className={cls.date}
                            />
                        </div>
                        <Skeleton
                            width={250}
                            height={24}
                            border="6px"
                            className={cls.title}
                        />
                        <Skeleton
                            width="100%"
                            height={200}
                            border="6px"
                            className={cls.img}
                        />
                        <div className={cls.footer}>
                            <Skeleton height={36} width={200} border="6px" />
                            <Skeleton
                                className={cls.views}
                                width={150}
                                height={16}
                                border="6px"
                            />
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <Skeleton
                            width="100%"
                            height="100%"
                            className={cls.img}
                        />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Skeleton
                            width={130}
                            height={16}
                            border="4px"
                            className={cls.skeletonPosition}
                        />
                    </div>
                    <Skeleton
                        width={150}
                        height={16}
                        border="4px"
                        className={cls.title}
                    />
                </Card>
            </div>
        );
    }
);
