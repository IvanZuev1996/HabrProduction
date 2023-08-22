> ## **Фича editableProfileCard**

EditableProfileCard - фича для работы с формой профиля пользователя. При загрузке маунтятся следующие редюсеры:

-   `profileReducer`

**Props:**

-   `id: string` - id пользователя
-   `className: string` - опциональный css-класс

**Прицип работы:**

При маунте компонента с помощью селектора `fetchProfileData` получаем данные пользрователя. При изменениии значений в инпутах вызываются соответствующие функции-хендлеры, которые обновляют состояние в state.

```typescript jsx
// EditableProfileCard.tsx

useInitialEffect(() => {
    if (id) {
        dispatch(fetchProfileData(id));
    }
});
```

**Slices:**

-   `profileSlice` - slice для обновления состояния всех инпутов и обновления данных пользователя.

**Reducers:**

-   `setReadonly` - обновляет состояние флага readonly.
-   `cancelEdit` - сброс всех новых значений в инпутах на старые при отмене редактирования.
-   `updateProfile` - обновление всех значений формы при сохранении изменений формы.

```typescript jsx
export const addCommentFormSlice = createSlice({
    setReadonly: (state, action: PayloadAction<boolean>) => {
        state.readonly = action.payload;
    },
    cancelEdit: (state) => {
        state.readonly = true;
        state.form = state.data;
        state.validateError = undefined;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
        state.form = {
            ...state.form,
            ...action.payload
        };
    }
});
```

**AsyncThunks:**

-   `fetchProfileData` - получение всех полей формы с сервера
-   `updateProfileData` - обновление всех полей формы
-   `validateProfileData` - проверка всех полей формы на валидность
