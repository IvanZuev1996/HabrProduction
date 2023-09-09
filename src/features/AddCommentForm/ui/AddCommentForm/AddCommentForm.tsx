import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import SendIcon from '@/shared/assets/icons/send-icon.svg';
import {
    DynamicModuleLoader,
    ReducerList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/helpers/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { Input } from '@/shared/ui/Input';
import { HStack } from '@/shared/ui/Stack';

import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import {
    addCommentFormActions,
    addCommentFormReducer
} from '../../model/slices/addCommentFormSlice';

import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const isMobileAgent = useDevice();
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch]
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    if (isMobileAgent) {
        return (
            <DynamicModuleLoader reducers={reducers}>
                <HStack
                    max
                    gap="8"
                    justify="between"
                    className={classNames(cls.AddCommentForm, {}, [className])}
                    data-testid="AddCommentForm"
                >
                    <Input
                        placeholder={t('Введите текст комментария')}
                        value={text || ''}
                        onChange={onCommentTextChange}
                        className={cls.input}
                        data-testid="AddCommentForm.Input"
                    />
                    <Icon
                        Svg={SendIcon}
                        width={50}
                        height={50}
                        className={cls.sendIcon}
                        data-testid="AddCommentForm.Button"
                        onClick={onSendHandler}
                    />
                </HStack>
            </DynamicModuleLoader>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack
                max
                gap="8"
                justify="between"
                className={classNames(cls.AddCommentForm, {}, [className])}
                data-testid="AddCommentForm"
            >
                <Input
                    placeholder={t('Введите текст комментария')}
                    value={text || ''}
                    onChange={onCommentTextChange}
                    className={cls.input}
                    data-testid="AddCommentForm.Input"
                />
                <Button
                    theme={ButtonTheme.BACKGROUND_SECONDARY}
                    className={cls.sendBtn}
                    onClick={onSendHandler}
                    data-testid="AddCommentForm.Button"
                >
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
