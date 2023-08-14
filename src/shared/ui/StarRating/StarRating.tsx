import { memo, useState } from 'react';
import { Mods, classNames } from '@/shared/lib/helpers/classNames';
import starIcon from '@/shared/assets/icons/star.svg';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';

interface StarRatingProps {
    className?: string;
    onSelect?: (starCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars: number[] = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelect, selectedStars = 0, size = 30 } = props;
    const [currentStarsCount, setCurrentStarsCount] = useState<number>(0); // сколько звезд нужно подсветить
    const [isSelected, setIsSelected] = useState<boolean>(
        Boolean(selectedStars)
    );

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    Svg={starIcon}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                    className={classNames(
                        cls.starIcon,
                        {
                            [cls.hovered]: currentStarsCount >= starNumber,
                            [cls.selected]: isSelected
                        },
                        [cls.normal]
                    )}
                />
            ))}
        </div>
    );
});
