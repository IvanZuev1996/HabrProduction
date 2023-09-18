import { memo } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';
import { Code } from '@/shared/ui/Code';
import { HStack } from '@/shared/ui/Stack';

import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
    ({ className, block }: ArticleCodeBlockComponentProps) => (
        <HStack
            justify="center"
            max
            className={classNames('', {}, [className])}
        >
            <Code text={block.code} />
        </HStack>
    )
);
