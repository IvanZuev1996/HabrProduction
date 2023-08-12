import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/helpers/classNames';
import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className={classNames('content-page', {}, [])}>
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
