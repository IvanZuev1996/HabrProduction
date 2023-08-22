> ## **Фича articleViewSelector**

ArticleViewSelector - фича для работы с переключение вида статей (плитка/список).

**Props:**

-   `onViewClick?: (view: ArticleView) => void` - callback-функция
-   `view: ArticleView` - текущий вид статей
-   `className: string` - опциональный css-класс

**Прицип работы:**

При нажатии на кнопку измененяи вида статей вызывается функция `onClick`, которая вызывает callback-функцию с новым значением `view`.

```typescript jsx
// ArticleViewSelector.tsx

const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
};
```
