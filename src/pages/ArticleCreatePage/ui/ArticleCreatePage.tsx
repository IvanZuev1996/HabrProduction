import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/helpers/classNames';
import { Page } from '@/widgets/Page';

interface ArticleCreatePageProps {
    className?: string;
}

const ArticleCreatePage = memo((props: ArticleCreatePageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page
            className={classNames('', {}, [className])}
            data-testid="ArticleCreatePage"
        >
            {t('Страница создания новой статьи')}
        </Page>
    );
});

export default ArticleCreatePage;
