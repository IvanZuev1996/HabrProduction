> ## **Фича avatarDropdown**

AvatarDropdown - фича для работы с выпадающим списком при нажатии на аватар пользователя. Внутри себя использует получает информацию о текущем пользователе для фильтрации контента в зависимости от ролей пользователя.

**Props:**

-   `className: string` - опциональный css-класс

**Прицип работы:**

При маунте компонента проверяются права текущего пользователя и в зависимости от флага `isAdminPanelAvailable` фильтруется наполнения компонента. При нажатии на кнопку _выйти_ вызывается функция `onLogout`, которая обнуляет данные пользователя в state.

```typescript jsx
// AvatarDropdown.tsx

const isAdminPanelAvailable = isAdmin || isManager;

const onLogout = useCallback(() => {
    dispatch(userActions.logout());
}, [dispatch]);
```
