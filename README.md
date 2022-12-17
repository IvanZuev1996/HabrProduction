### Файловая структура: [_Feature-Sliced Design_](https://feature-sliced.design/ru/)

1. **Shared** — переиспользуемый код, не имеющий отношения к специфике приложения/бизнеса.
2. **Entities** (сущности) — бизнес-сущности (например, User, Product или Order).
3. **Features** (фичи) — взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя.
4. **Widgets** (виджеты) — композиционный слой для соединения сущностей и фич в самостоятельные блоки.
5. **Pages** (страницы) — композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов.
6. **Processes** — сложные сценарии, покрывающие несколько страниц (например, аутентификация).
7. **App** — настройки, стили и провайдеры для всего приложения.

### Этапы разработки:

#### Webpack

-   Подключен [_webpack_](https://webpack.js.org/). Настроен _[tsconfig.json](tsconfig.json)_
-   Декомпозиция _[webpack.config.ts](webpack.config.ts)_
-   Настроен [webpack-dev-server](https://webpack.js.org/configuration/dev-server/). Настроены переменные окружения для сборки
-   Добавлены пакеты [react](https://ru.reactjs.org), [react-dom](https://ru.reactjs.org/docs/react-dom.html). Настроен webpack для [scss](https://sass-scss.ru), [css-modules](https://github.com/css-modules/css-modules).
-   Добавлен [react-router-dom 6](https://reactrouter.com/en/v6.3.0/getting-started/overview). Добавлен [Code-splitting](https://reactjs.org/docs/code-splitting.html). [React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy), [React.Suspense](https://reactjs.org/docs/react-api.html#reactsuspense)
-   Настроены глобальные стили + dark theme, настроены абсолютные импорты через webpack

#### Routes, Styles, linting, Jest

-   Настроен конфиг для router
-   Добавлен webpack [SVGr](https://www.npmjs.com/package/@svgr/webpack) для svg, [file-loader](https://v4.webpack.js.org/loaders/file-loader/) для jpeg,gif,png и т.п.
-   Добавлен [Sidebar](src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx), [Navbar](src/widgets/navbar/ui/Navbar.tsx), [ThemeSwitcher](src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.tsx)
-   Добавлен [i18n](https://react.i18next.com/). [Define plugin](https://webpack.js.org/plugins/define-plugin/) для глобальных переменных. Добавлен [LangSwitcher](src/shared/ui/LangSwitcher/LangSwitcher.tsx)
-   Добавлен [react-refresh-webpack-plugin](https://www.npmjs.com/package/@pmmmwh/react-refresh-webpack-plugin) для отображения изменений в React компонентах без перезагрузки страницы и [hot-module-replacement-plugin](https://webpack.js.org/plugins/hot-module-replacement-plugin/) для стилей и т.п.
-   Настроен [ESLint](https://eslint.org/). Создан [.eslintrc.js](.eslintrc.js)
-   Настроен [Stylelint](https://stylelint.io/). Создан [.stylelintrc.json](.stylelintrc.json)
-   Настроен [Jest](https://jestjs.io/ru/). Создан [jest.config.ts](./config/jest/jest.config.ts)
-   Добавлен страница [NotFoundPage](src/pages/NotFoundPage/ui/NotFoundPage.tsx) и Loader (Spinner)

#### Storybook, RTL, Bundle analyzer, Error Boundary, UI tests

-   Добавлен [ErrorBoundary](src/app/providers/ErrorBoundary/ui/ErrorBoundary.tsx), компонент ошибки [PageError](src/widgets/PageError/ui/PageError.tsx)
-   Установлен [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) для отслеживания размера бандла
-   Установлен [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/). Написаны тесты на [Button](./src/shared/ui/Button/Button.test.tsx),[Sidebar](./src/widgets/Sidebar/ui/Sidebar/Sidebar.test.tsx)
-   Установлен [Storybook](https://storybook.js.org/docs/react/get-started/introduction). Написана stories на каждую страницу и компонент
-   Установлен [Loki](https://loki.js.org/getting-started.html) для скриншотного тестирования в связке со Storybook
-   Настроен [Github Actions pipeline](.github/workflows/main.yaml). Автоматические тесты при pull-request или push в master. Добавлены скриншотные тесты.
-   Добавлены размеры M, L, XL для Button. Обновлён Storybook. Ссылки перенесены в Sidebar. Добавлены иконки для ссылок.
-   Установлен [reg-cli](https://github.com/reg-viz/reg-cli) для более удобного сравнения скриншотов для тестирования

#### Server, Redux

-   Добавлен [Redux Toolkit](https://redux-toolkit.js.org/).
-   Установлен [json-server](https://www.npmjs.com/package/json-server) для имитации работы cервера.

#### Реализация авторизации. Создание кастомного Input, работа с текстом. Lazy modal. Reducers, slices, async thunk

-   Добавлен [Lazy Modal](src/shared/ui/Modal/Modal.tsx), [Кастомный Input](src/shared/ui/Input/Input.tsx)
-   Добавлена [форма авторизации](src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx). [UserSlice](src/entities/User/model/slice/userSlice.tsx). Авторизация через redux-toolkit.
-   Добавлен sidebarSlice [Sidebar](src/entities/Sidebar/model/slice/sidebarSlice.tsx) для сворачивания Sidebar из компонента navbar.

#### Async reducers. Тесты. Instance API. TS strict mode. Модуль профиля

-   Добавлен [Reducer Manager](src/app/providers/StoreProvider/config/reducerManager.ts) и [DynamicModuleLoader](src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx), чтобы в runtime добавлять и удалять новые reducers
-   Создан класс [TestAsyncThunk](src/shared/lib/tests/TestAsyncThunk/TestAsyncThunk.tsx) для тестирования
-   Оптимизированны перерисовки с помощью memo/useMemo
-   Создан инстанс [API](src/shared/api/api.ts). Инстанс добавлен в extra аргумент AsyncThunk для удобного использования этого инстанса.
-   Добавлена переменная окружения _API_ для задавания baseUrl из переменных окружения, на этапе сборки. Переменная добавлена в конфиг [webpack](config/build/buildPlugins.ts), в конфиг [storybook](config/storybook/webpack.config.ts), в конфиг [jest](config/jest/jest.config.ts), в конфиг [eslint](.eslintrc.js)
-   Добавлен AsyncFunc [fetchProfileData](src/entities/Profile/model/services/fetchProfileData/fetchProfileData.ts) для получения данных пользователя.
-   Включен typescript strict mode, исправлены все ошибки
-   Добавлена глобальная декларация [DeepPartial](src/app/types/global.d.ts)
-   Добавлен модуль профиля [ProfilePage](src/pages/ProfilePage/ui/ProfilePage.tsx). Реализован функционал редактирования профиля.
-   Добавлен флаг [authOnly](src/shared/config/routeConfig/routeConfig.tsx) для фильтрации контента для авторизованных пользователей.
-   Добавлена глобальная переменная [_PROJECT_](webpack.config.ts) для различия сред frontend, jest и storybook.
-   Добавлены тесты для модуля [профиля](src/entities/Profile/ui/ProfileCard/ProfileCard.tsx)
-   Добавлено расширение [Folder Template](https://github.com/Huuums/vscode-folder-templates)
-   Добавлен [npm concurrently](https://www.npmjs.com/package/concurrently)

#### Статьи, комментарии. Нормализация данных. Блочная структура. Union типы. Skeleton. Protected Routes

-   Добавлен компонент [RequireAuth](src/app/providers/router/ui/RequireAuth.tsx) для защиты определенных маршрутов для не авторизованных пользователей.
-   Добавлена страница [articlesPage](src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.tsx), [articleDetailsPage](src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.tsx)
-   Реализована блочкая структура статьи
-   Реализован функционал [копирования](src/shared/ui/Code/Code.tsx) текста (кода)
-   Добавлен [EntityAdapter](src/pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice.ts) для нормализации данных. [EntityAdapterPage](https://redux-toolkit.js.org/api/createEntityAdapter), [Normalizing State](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape)

#### Профили. Infinite scroll, intersection API. Отправка комментариев, профили пользователей

-   Добавлен функционал просмотра профилей разных пользователей, просмотра и отправки комментариев.
-   Реализован хук [UseHover](src/shared/lib/hooks/useHover/useHover.ts)
-   Реализованы 2 типа отображения карточек [статей](src/entities/Article/ui/ArticleList/ArticleList.tsx)
-   Добавлена features [ArticleViewSelector](src/features/ArticleViewSelector/ArticleViewSelector.tsx) для возможности переключения вида списка статей.
-   Реализован хук [useIntiniteScroll](src/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll.ts) для отслеживания позиции DOM-елементов.
-   Реализована бесконечная лента [ArticlesPage](src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.tsx)

#### Троттлинг. Дебаунс. Группировка редюсеров. Фильтры, сортировка, поиск. CopyPlugin и продакшн на netlify.

-   Исправлен компонент [DynamicModuleLoader](src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) для предотвращения повторного вмонтирования редюсеров.
-   Добавлен хук [useThrottle](src/shared/lib/hooks/useThrottle/useThrottle.ts) для задержки часто повторяющихся событий.
-   Обновлен компонент [Page](src/widgets/Page/Page.tsx) для реализации функционала сохранения позиции скрола для каждой страницы.
