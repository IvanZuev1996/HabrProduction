import { StateSchema } from 'app/providers/StoreProvider';
import { getUIScrollByPath, uiActions } from 'features/UI';
import { memo, MutableRefObject, ReactNode, useRef, UIEvent } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/helpers/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getUIScrollByPath(state, pathname)
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            uiActions.setScrollPosition({
                path: pathname,
                position: e.currentTarget.scrollTop
            })
        );
    }, 500);

    return (
        <section
            ref={wrapperRef}
            onScroll={onScroll}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            {onScrollEnd ? (
                <div ref={triggerRef} className={cls.trigger} />
            ) : null}
        </section>
    );
});
