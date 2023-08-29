> ## **Фича articleSortSelector**

ArticleSortSelector - фича для работы с переключением направления сортировки статей.

**Props:**

-   `className?: string` - опциональный css-класс
-   `sort: ArticleSortField` - выбранная сортировка
-   `order: SortOrder` - выбранное направление сортировки
-   `onChangeOrder: (newOrder: SortOrder) => void` - callback-функция изменения направления сортировки
-   `onChangeSort: (newSort: ArticleSortField) => void` - callback-функция изменения сортировки
