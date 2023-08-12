import { ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/helpers/classNames';
import bigViewIcon from '@/shared/assets/icons/big-view-icon.svg';
import smallViewIcon from '@/shared/assets/icons/small-view-icon.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: smallViewIcon
    },
    {
        view: ArticleView.BIG,
        icon: bigViewIcon
    }
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType, index) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                    className={cls.Button}
                    key={index}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames(
                            cls.icon,
                            { [cls.selected]: viewType.view === view },
                            []
                        )}
                    />
                </Button>
            ))}
        </div>
    );
};
