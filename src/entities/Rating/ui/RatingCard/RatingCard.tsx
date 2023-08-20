import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (startsCount: number) => void;
    onAccept?: (startsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        feedbackTitle,
        hasFeedback,
        title,
        onAccept,
        onCancel,
        rate = 0
    } = props;
    const { t } = useTranslation();
    const isMobile = useDevice();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [starsCount, setStarsCount] = useState<number>(rate);
    const [feedback, setFeedback] = useState<string>('');

    const onSelectStars = useCallback(
        (selectedStartCount: number) => {
            setStarsCount(selectedStartCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStartCount);
            }
        },
        [hasFeedback, onAccept]
    );

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        setStarsCount(0);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                placeholder={t('Напишите ваш отзыв...')}
                value={feedback}
                onChange={setFeedback}
            />
        </>
    );

    return (
        <Card className={classNames(cls.RatingCard, {}, [className])} max>
            <VStack align="center" justify="center" gap="8">
                <Text title={starsCount ? t('Спасибо за оценку!') : title} />
                <StarRating
                    size={40}
                    onSelect={onSelectStars}
                    selectedStars={starsCount}
                />
            </VStack>
            {isMobile && isMobile !== null ? (
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
                    <VStack align="center" justify="center" gap="32" max>
                        {modalContent}
                        <Button
                            size={ButtonSize.L}
                            theme={ButtonTheme.BACKGROUND_SECONDARY}
                            onClick={acceptHandler}
                            fullWidth
                        >
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            ) : (
                <Modal isOpen={isModalOpen} onClose={cancelHandler} lazy>
                    <VStack align="center" justify="center" gap="32" max>
                        {modalContent}
                    </VStack>
                    <HStack max justify="end" gap="16" className={cls.btns}>
                        <Button
                            theme={ButtonTheme.BACKGROUND_RED}
                            onClick={cancelHandler}
                        >
                            {t('Закрыть')}
                        </Button>
                        <Button
                            theme={ButtonTheme.BACKGROUND_SECONDARY}
                            onClick={acceptHandler}
                        >
                            {t('Отправить')}
                        </Button>
                    </HStack>
                </Modal>
            )}
        </Card>
    );
});
