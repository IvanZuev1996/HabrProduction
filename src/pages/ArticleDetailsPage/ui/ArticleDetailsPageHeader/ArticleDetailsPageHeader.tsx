import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import cls from './ArticleDetailsPageHeader.module.scss';
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
            <div
                className={classNames(cls.ArticleDetailsPageHeader, {}, [
                    className
                ])}
            >
                <Button onClick={onBackToList} theme={ButtonTheme.CLEAR}>
                    {t('Назад к списку')}
                </Button>
                {canEdit && (
                    <Button
                        onClick={onEditArticle}
                        className={cls.editBtn}
                        theme={ButtonTheme.BACKGROUND_SECONDARY}
                    >
                        {t('Редактировать')}
                    </Button>
                )}
            </div>
        );
    }
);
