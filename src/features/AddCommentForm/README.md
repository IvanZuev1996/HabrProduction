> ## **Фича addCommentForm**

AddCommentForm - фича для работы с формой добавления комментариев. При загрузке монтирует следующие асинхронные редюсеры:

-   addCommentFormReducer

**Props:**

-   `onSendComment: (text: string) => void` - callback-функция
-   `className: string` - опциональный css-класс

**Прицип работы:**

При нажатии на кнопку _'отправить'_ вызывается функция `onSendHandler`, которая вызывается переданный ей callback-функцию и, вызвав функцию `onCommentTextChange`, обнуляет значение текста в инпуте:

```typescript jsx
// AddCommentForm.tsx

const onCommentTextChange = useCallback(
    (value: string) => {
        dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
);

const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
}, [onCommentTextChange, onSendComment, text]);
```

**Slices:**

-   `addCommentFormSlice` - slice для обновления состояния строки комментария.

**Reducers:**

-   `setText` - принимает новое состояния строки комментария и помещает в state.

```typescript jsx
export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    }
});
```
