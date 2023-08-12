import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article/article';

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
            navigate(RoutePath.articles);
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            navigate(`${RoutePath.article_details}${article?.id}/edit`);
        }, [article?.id, navigate]);

        return (
            <HStack
                max
                justify="between"
                className={classNames('', {}, [className])}
            >
                <Button onClick={onBackToList} theme={ButtonTheme.CLEAR}>
                    {t('Назад к списку')}
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
