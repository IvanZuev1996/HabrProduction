import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducerList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/helpers/classNames';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecomendationsList } from 'features/articleRecomendationsList';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const { id = '1' } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames('', {}, [className])}>
                <VStack gap="16" max align="normal">
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRecomendationsList
                        className={cls.recommendations}
                    />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
