import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Page } from 'widgets/Page/Page';

interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page className={classNames('', {}, [className])}>
            {t(
                'Ошибка! У вас нет прав для просмотра контента на этой странице'
            )}
        </Page>
    );
});

export default ForbiddenPage;
