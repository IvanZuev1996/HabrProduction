import { Suspense, useCallback, useEffect, useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/Sidebar';
import { getUserInited, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    const [isCollapsedSidebar, setIsCollapsedSidebar] =
        useState<boolean>(false);

    const onToggleSidebar = useCallback(() => {
        setIsCollapsedSidebar(!isCollapsedSidebar);
    }, [isCollapsedSidebar]);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar onToggleSidebar={onToggleSidebar} />
                <div className={classNames('content-page', {}, [])}>
                    <Sidebar isOpen={isCollapsedSidebar} />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
