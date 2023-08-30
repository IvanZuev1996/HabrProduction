import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/helpers/classNames';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page className={classNames('', {}, [className])}>
            {t('Страница редактирования статьи')}
        </Page>
    );
});

export default ArticleEditPage;
