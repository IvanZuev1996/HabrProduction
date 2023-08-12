import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { HStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return <Page>{t('Главная страница')}</Page>;
});

export default MainPage;
