import { Suspense, useCallback, useEffect, useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/Sidebar';
import { userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

function App() {
    const { theme } = useTheme();
    const [isCollapsedSidebar, setIsCollapsedSidebar] = useState(false);
    const dispatch = useAppDispatch();

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
                <div
                    className={classNames(
                        'content-page',
                        { collapsed: isCollapsedSidebar },
                        []
                    )}
                >
                    <Sidebar isOpen={isCollapsedSidebar} />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
