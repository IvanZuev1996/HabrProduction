> ## **Фича articleRecomendationsList**

ArticleRecomendationsList - фича для работы со списком списка статей-рекомендаций. При маунте компонента инжектит следующие эндпоинты:

-   `getArticleRecomendationsList` - query-эндпоинт для получения ограниченного кол-ва статей.

    ```typescript jsx
    getArticleRecomendationsList: build.query<Article[], number>({
        query: (limit) => ({
            url: '/articles',
            params: {
                _limit: limit
            }
        })
    });
    ```

**Props:**

-   `className: string` - опциональный css-класс

**Прицип работы:**

При маунте компонента с помощью хука `useArticleRecomendationsList` получаем необходимое кол-во статей и отрисовываем их.

```typescript jsx
// ArticleRecomendationsList.tsx

const { data: articles, isLoading, error } = useArticleRecomendationsList(3);
```
