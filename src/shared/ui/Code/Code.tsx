import { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import CopyIcon from 'shared/assets/icons/copy-icon.svg';
import { Icon, IconType } from '../Icon/Icon';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <Icon Svg={CopyIcon} type={IconType.COPY} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});
