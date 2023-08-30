> ## **Фича UI**

UI - фича для работы с сохранением позиции скрола.

**Прицип работы:**

С помощью хука `useTheme` получаем текущее значение темы и функцию, которая ее переключает. При нажатии на кнопку изменения темы вызывается функция `toggleTheme`.

```typescript jsx
// ThemeSwitcher.tsx

const { theme, toggleTheme } = useTheme();
```

**Slices:**

-   `UISlice`

**Reducers:**

-   `setScrollPosition` - редючер для для обновления позиции скролла на определенной странице

```typescript jsx
setScrollPosition: (
    state,
    { payload }: PayloadAction<{ path: string; position: number }>
) => {
    state.scroll[payload.path] = payload.position;
};
```
