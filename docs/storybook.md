> ## **Storybook**

В проекте для каждого компонента описываются стори-кейсы. Если компонент использует внутри себя запросы на сервер, то они мокаются помощью [storybook-addon-mock](https://storybook-addon-mock.netlify.app/?path=/docs/docs-installation--docs)

Файл со сторикейсами создается рядом с компонентом с расширением **.stories.tsx**

Запустить сторибук можно командой:

-   `npm run storybook`

---

> ## Работа с Storybook:

1. Для применения определенной темы компонента используется [ThemeDecorator](/src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx). Эта функция, которая в качестве аргумента принимает следующие аргументы:

    | Аргумент | Описание                                                 |
    | -------- | -------------------------------------------------------- |
    | `theme`  | тема компонента типа [Theme](/src/shared/const/theme.ts) |

    Пример использования:

    ```typescript jsx
    // YourComponent.stories.tsx

    ...

    export const Dark = Template.bind({});
    Dark.args = {};

    Dark.decorators = [ThemeDecorator(Theme.DARK)];
    ```

2. Для подготовки моковых данных в redux-store используется [StoreDecorator](/src/shared/config/storybook/StoreDecorator/StoreDecorator.tsx). Это функция, которая в качестве агрументов принимает следующие аргументы:

    | Аргумент        | Описание                                                                                                                                                                               |
    | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `state`         | начальный redux-state типа [StateSchema](/src/app/providers/StoreProvider/config/StateSchema.ts)                                                                                       |
    | `asyncReducers` | асинхронные редюсеры, которые необходимо вмонтировать в redux-state при загрузке компонента. Тип [ReducerList](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) |

    Пример использования:

    ```typescript jsx
    // YourComponent.stories.tsx

    import { ComponentStory, ComponentMeta } from '@storybook/react';
    import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

    export default {
        title: '{ComponentLayer}/{ComponentName}',
        component: ComponentName,
        argTypes: {
            backgroundColor: { control: 'color' }
        },
        decorators: [
            StoreDecorator({
                // необходимый state: StateSchema
            })
        ]
    } as ComponentMeta<typeof ComponentName>;

    const Template: ComponentStory<typeof ComponentName> = (args) => (
        <ComponentName {...args} />
    );
    ```

3. Если компонент использует внутри себя запросы на сервер, то они мокаются помощью [storybook-addon-mock](https://storybook-addon-mock.netlify.app/?path=/docs/docs-installation--docs). Для этого необходимо указать свойство `mockData` внутри свойства parameters у сторикейса.

    Пример использования:

    ```typescript jsx
    // YourComponent.stories.tsx

    import { ComponentStory, ComponentMeta } from '@storybook/react';

    export default {
        title: '{ComponentLayer}/{ComponentName}',
        component: ComponentName,
        argTypes: {
            backgroundColor: { control: 'color' }
        }
    } as ComponentMeta<typeof ComponentName>;

    const Template: ComponentStory<typeof ComponentName> = (args) => (
        <ComponentName {...args} />
    );

    export const Normal = Template.bind({});
    Normal.args = {};

    Normal.parameters = {
        mockData: YourMockData
    };
    ```

> ## Правила оформления сторикейсов для компонентов:

-   Сторикейсы пришутся на все компоненты
-   Все сторикейсы описываются в двух вариантах - Light (Normal) и Dark.
-   В сторикейсах описываются все возможные состояния компонента (Normal, Loading, Error)
-   Все компоненты группируются по названию слоя в котором они находятся и названию слайса.

    Шаблон: `'LayerName/SliceName/ComponentName'`

    Пример: `'features/ArticleRecomendationsList/ArticleRecomendationsList'`
