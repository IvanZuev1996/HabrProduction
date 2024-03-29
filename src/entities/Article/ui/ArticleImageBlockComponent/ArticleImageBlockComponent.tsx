import { memo } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextAlign } from '@/shared/ui/Text';

import { ArticleImageBlock } from '../../model/types/article';

import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    ({ className, block }: ArticleImageBlockComponentProps) => (
        <VStack
            justify="center"
            align="center"
            max
            className={classNames('', {}, [className])}
        >
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </VStack>
    )
);
