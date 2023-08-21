import { memo, useCallback } from 'react';

import CopyIcon from '@/shared/assets/icons/copy-icon.svg';
import { classNames } from '@/shared/lib/helpers/classNames';

import { Button, ButtonTheme } from '../Button/Button';
import { Icon, IconType } from '../Icon/Icon';

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
