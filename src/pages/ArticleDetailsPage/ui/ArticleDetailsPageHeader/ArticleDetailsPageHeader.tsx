import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from '@/entities/Article';
import LeftArrow from '@/shared/assets/icons/left-arrow.svg';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';

import { getCanEditArticle } from '../../model/selectors/article/article';

import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const navigate = useNavigate();
        const canEdit = useSelector(getCanEditArticle);
        const article = useSelector(getArticleDetailsData);

        const onBackToList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            navigate(getRouteArticleEdit(article?.id || ''));
        }, [article?.id, navigate]);

        return (
            <HStack
                max
                justify="between"
                className={classNames(cls.header, {}, [className])}
            >
                <Button onClick={onBackToList} theme={ButtonTheme.CLEAR}>
                    <Icon Svg={LeftArrow} width={30} height={30} />
                </Button>
                {canEdit && (
                    <Button
                        onClick={onEditArticle}
                        theme={ButtonTheme.BACKGROUND_SECONDARY}
                    >
                        {t('Редактировать')}
                    </Button>
                )}
            </HStack>
        );
    }
);
