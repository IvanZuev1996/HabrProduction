> ## **Фича themeSwitcher**

ThemeSwitcher - фича для работы с кнопкой изменения темы приложения.

**Props:**

-   `className: string` - опциональный css-класс

**Прицип работы:**

С помощью хука `useTheme` получаем текущее значение темы и функцию, которая ее переключает. При нажатии на кнопку изменения темы вызывается функция `toggleTheme`.

```typescript jsx
// ThemeSwitcher.tsx

const { theme, toggleTheme } = useTheme();
```
