import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isMobile = useDevice();
    const { isArticlePageHasBeenOpen } = useJsonSettings();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (!isArticlePageHasBeenOpen) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlePageHasBeenOpen: true }));
        }
    }, [dispatch, isArticlePageHasBeenOpen]);

    const onClose = () => setIsOpen(false);

    const text = (
        <Text
            title={t('Добро пожаловать на страницу статей!')}
            text={t(
                'Здесь вы можете фильтровать и сортировать статьи для поиска необходимой'
            )}
        />
    );

    if (isMobile) {
        return (
            <Drawer lazy isOpen={isOpen} onClose={onClose}>
                {text}
            </Drawer>
        );
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {text}
        </Modal>
    );
});
