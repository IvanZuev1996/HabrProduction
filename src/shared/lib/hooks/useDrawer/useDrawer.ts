import { useCallback, useState } from 'react';

export const useDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsDrawerOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsDrawerOpen(false);
    }, []);

    return { isDrawerOpen, onCloseDrawer, onOpenDrawer };
};
