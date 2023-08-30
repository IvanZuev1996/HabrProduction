import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(cls['lds-ellipsis'], {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
