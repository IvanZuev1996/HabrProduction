> ## **Фича profileRating**

ProfileRating - фича для работы с формой добавления оценки профиля. При загрузке инжектит следующие эндпоинты:

-   `getProfileRating` - query-эндпоинт для получения оценки профиля по id пользователя и id профиля.

    ```typescript jsx
    getProfileRating: build.query<Rating[], GetProfileArg>({
        query: ({ userId, profileId }) => ({
            url: 'profile-ratings',
            params: {
                userId,
                profileId
            }
        })
    }),
    ```

-   `rateProfile;` - mutation-эндпоинт для добавления оценки профиля.

    ```typescript jsx
    rateProfile: build.mutation<void, RateProfileArg>({
        query: (arg) => ({
            url: 'profile-ratings',
            method: 'POST',
            body: arg
        })
    });
    ```

**Props:**

-   `profileId: string` - id профиля
-   `className?: string;` - опциональный css-класс

**Прицип работы:**

При маунте компонента с помощью хука `useProfileRating` получаем информацию об оценки профиля текущим пользователем. При выборе определенной оценки вызывается функция `onAccept`, которая c помощью хука `rateProfileMutation` отправляет запрос на сервер для обновления оценки профиля текущим пользователем.

```typescript jsx
// ProfileRating.tsx

const [rateProfileMutation] = useRateProfile();

const { data, isLoading } = useProfileRating({
    profileId,
    userId: userData?.id ?? ''
});

const onAccept = useCallback(
    (startsCount: number, feedback?: string) => {
        try {
            rateProfileMutation({
                userId: userData?.id ?? '',
                profileId,
                rate: startsCount,
                feedback
            });
        } catch (error) {
            console.log(error);
        }
    },
    [profileId, rateProfileMutation, userData?.id]
);
```
