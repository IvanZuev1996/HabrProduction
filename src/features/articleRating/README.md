> ## **Фича articleRating**

ArticleRating - фича для работы с формой добавления оценки статьи. При загрузке инжектит следующие эндпоинты:

-   `getArticleRating` - query-эндпоинт для получения оценки статьи по id пользователя и id статьи.

    ```typescript jsx
    getArticleRating: build.query<Rating[], GetArticleArg>({
        query: ({ userId, articleId }) => ({
            url: '/article-ratings',
            params: {
                userId,
                articleId
            }
        })
    }),
    ```

-   `rateArticle;` - mutation-эндпоинт для добавления оценки статьи.

    ```typescript jsx
    rateArticle: build.mutation<void, RateArticleArg>({
        query: (arg) => ({
            url: '/article-ratings',
            method: 'POST',
            body: arg
        })
    });
    ```

**Props:**

-   `articleId: string` - id статьи
-   `className: string;` - опциональный css-класс

**Прицип работы:**

При маунте компонента с помощью хука `useArticleRating` получаем информацию об оценки статьи текущим пользователем. При выборе определенной оценки вызывается функция `onAccept`, которая c помощью хука `rateArticleMutation` отправляет запрос на сервер для обновления оценки статьи текущим пользователем.

```typescript jsx
// ArticleRating.tsx

const [rateArticleMutation] = useRateArticle();

const { data, isLoading } = useArticleRating({
    userId: userData?.id ?? '',
    articleId
});

const onAccept = useCallback(
    (startCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                articleId,
                rate: startCount,
                userId: userData?.id ?? '',
                feedback
            });
        } catch (e) {
            console.log(e);
        }
    },
[articleId, rateArticleMutation, userData?.id]
```
