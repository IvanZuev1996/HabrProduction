> ## **Фича notificationPopup**

NotificationPopup - фича для работы с выпадающим списком уведомлений.

**Props:**

-   `isMobileStorybook?: boolean` - boolean-флаг для работы с компонентом Drawer в Storybook
-   `className: string` - опциональный css-класс

**Прицип работы:**

При открытии/закрытии окна уведовлений вызывыаются соответсвующие функции-хендлеры (`onOpenDrawer, onDrawerClose`). С помощью хука `useDevice` получаем информацию о агенте и в зависимости от него отрисовываем разные компоненты (мобильный или десктовный).

```typescript jsx
// NotificationPopup.tsx

let isMobile = useDevice();

const onOpenDrawer = useCallback(() => {
    setIsDrawerOpen(true);
}, []);

const onDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
}, []);
```
