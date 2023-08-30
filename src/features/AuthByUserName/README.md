> ## **Фича authByUsername**

AuthByUsername - фича для работы с авторизацией по логину и паролю. При загрузке мантирует следующие редюсеры:

-   `loginReducer`

**Props:**

-   `isOpen?: boolean` - boolean-флаг (открыто модальное окно)
-   `onClose?: () => void` - callback-функция
-   `className: string` - опциональный css-класс

**Прицип работы:**

При закрытии модального окна срабатывает callback-функция `onClose`. При изменении текста в поле логин или пароль вызываются соответсвующий функции `onChangeUsername, onChangePassword`, которые обновляют state.
При нажатии на кнопку _войти_ вызывается функция `onLoginClick`, которая отправляет запрос на сервер и при успешном входе, вызывает callback-функцию _onSuccess_.

```typescript jsx
// LoginForm.tsx

const onChangeUsername = useCallback(
    (value: string) => {
        dispatch(loginActions.setUsername(value));
    },
    [dispatch]
);

const onChangePassword = useCallback(
    (value: string) => {
        dispatch(loginActions.setPassword(value));
    },
    [dispatch]
);

const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ password, username }));
    if (result.meta.requestStatus === 'fulfilled') {
        onSuccess?.();
    }
}, [dispatch, onSuccess, password, username]);
```

**Slices:**

-   `loginSlice` - slice для обновления состояния инпутов и отправки запроса на сервер при авторизации.

**Reducers:**

-   `setUsername` - принимает новое состояния строки имя пользователя инпута и помещает в state.
-   `setPassword` - принимает новое состояния строки пароля инпута и помещает в state.

```typescript jsx
export const addCommentFormSlice = createSlice({
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        }
    }
});
```

**AsyncThunks:**

-   `loginByUsername` - AsyncThunk который делает запрос на сервер и возвращает данные пользователя при успешной авторизации.

```typescript jsx
extraReducers: (builder) => {
    builder
        .addCase(loginByUsername.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        })
        .addCase(loginByUsername.fulfilled, (state, action) => {
            state.isLoading = false;
        })
        .addCase(loginByUsername.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
};
```
