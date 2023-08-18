import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/helpers/classNames';

interface ArticleCreatePageProps {
    className?: string;
}

const ArticleCreatePage = memo((props: ArticleCreatePageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page className={classNames('', {}, [className])}>
            {t('Страница создания новой статьи')}
        </Page>
    );
});

export default ArticleCreatePage;
