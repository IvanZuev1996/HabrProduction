> ## **Тесты**

В проекте используются следующие виды тестов:

| Скрипт              | Описание                                    |
| ------------------- | ------------------------------------------- |
| `npm run test:unit` | Обычные unit тесты на jest                  |
| `npm run test:unit` | Тесты на компоненты с React testing library |
| `npm run test:ui`   | Скриншотное тестирование с loki             |
| `npm run test:e2e`  | e2e тестирование с Cypress                  |

-   ## **Unit-тестирование**

Для Unit-тестов в проекте используется библиотека jest.

Ссылка на документацию - [https://jestjs.io/docs/getting-started](https://jestjs.io/docs/getting-started)

**Пример:**

```typescript test
// В файле 'yourFunction.test.ts':

describe('Название тестов', () => {
    test('Описание конкретного теста', () => {
        expect(**Вызов тестируемой функции**).toBe(**Ожидаемое значение**);
    });
});
```

-   ## **Тесты на компоненты**

Для тестирования компонентов в проекте используется библиотека React testing library.

Ссылка на документацию - [https://testing-library.com/docs/react-testing-library/intro/](https://testing-library.com/docs/react-testing-library/intro/)

**Пример:**

```typescript test
// В файле 'YourComponent.test.tsx':

import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('Название тестов', () => {
    test('Описание конекретного теста', () => {
        componentRender(<YourComponent />);
        expect(
            screen.getByTestId('your-component-test-id')
        ).toBeInTheDocument();
    });
});
```

-   ## **Скриншотное тестирование**

Для скриншотного тестирования в проекте используется библиотека Loki. Скриншотное тестирование производится по компонентам из storybook.

Ссылка на документацию **Storybook** - [https://loki.js.org/getting-started.html](https://loki.js.org/getting-started.html)

Ссылка на документацию **Loki** - [https://loki.js.org/getting-started.html](https://loki.js.org/getting-started.html)

**Пример для создания Story-кейса для компонента:**

```typescript test
// В файле 'YourComponent.stories.tsx':

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: '{ComponentLayer}/{ComponentName}',
    component: {ComponentName},
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof {ComponentName}>;

const Template: ComponentStory<typeof {ComponentName}> = (args) => <ComponentName {...args} />;

export const Primary = Template.bind({});
Primary.args = {ComponentArgs};
```
