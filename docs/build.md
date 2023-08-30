> ## **Конфигурация проекта**

> > ### **Webpack**

Вся настройка Webpack находится в /config/build.

**Список конфигурационных файлов Webpack:**

-   [`buildWebpackConfig`](/config/build/buildWebpackConfig.ts) - Функция, которая возвращает объект типа _webpack.Configuration_ - основной конфигурационный файл Webpack.
-   [`buildResolvers`](/config/build/buildResolves.ts) - Функция, которая возвращает объект типа _ResolveOptions_ - настрока resolver
-   [`buildPlugins`](/config/build/buildPlugins.ts) - Функция, которая возвращает объект типа _webpack.WebpackPluginInstance[]_ - настройка плагинов проекта для dev и prod режимов
-   [`buildLoaders`](/config/build/buildLoaders.ts) - Функция, которая возвращает объект типа _webpack.RuleSetRule[]_ - настройка лоадеров проекта
-   [`buildDevServer`](/config/build/buildDevServer.ts) - Функция, которая возвращает объект типа _Configuration_ из _webpack-dev-server_ - настройка dev-сервера для разработки

---

**Webpack-плагины, используемые в проекте:**

| Плагин                       | Описание                                                         |
| ---------------------------- | ---------------------------------------------------------------- |
| `HtmlWebpackPlugin`          | Плагин для генерации HTML файла с необходимыми тегами `<script>` |
| `ProgressPlugin`             | Плагин для отслеживания прогресса сборки приложения              |
| `MiniCssExtractPlugin`       | Плагин для создания css-файлов                                   |
| `DefinePlugin`               | Плагин для настройки переменных окружения                        |
| `CopyPlugin`                 | Плагин для копирования каталогов в каталог сборки                |
| `ForkTsCheckerWebpackPlugin` | Плагин для проверки типов в отдельном процессе                   |

**Webpack-плагины только для DEV-режима:**

| Плагин                       | Описание                                               |
| ---------------------------- | ------------------------------------------------------ |
| `HotModuleReplacementPlugin` | Плагин для мгновенного отображения изменений в проекте |
| `ReactRefreshWebpackPlugin`  | Плагин для hot-перезагрузки компонентов React          |
| `CircularDependencyPlugin`   | Плагин для нахождения кольцевых зависимостей в проекте |

---

**Webpack-loders, используемые в проекте:**

| Loader          | Описание                                         |
| --------------- | ------------------------------------------------ |
| `babel-loader`  | Loader для обработки ts,js,tsx,jsx файлов        |
| `css-loader`    | Loader для обработки css, scss файлов            |
| `@svgr/webpack` | Плагин для обработки файлов svg                  |
| `file-loader`   | Плагин для обработки jpg, png, jpeg, giff файлов |

> > ### **Vite**

Вся настройка Vite находится в [/vite.config.ts](/vite.config.ts).

**Vite-плагины:**

| Плагин  | Описание                        |
| ------- | ------------------------------- |
| `svgr`  | Плагин для обработки svg файлов |
| `react` | Плагин для работы с React       |
