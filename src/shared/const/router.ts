export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEl = 'admin_panel',
    FORBIDDEN = 'forbidden',
    // last page
    NOT_FOUND = 'not_found'
}

// TODO:
// Заменить объект routes на отдельные функции, так как нельзя явно указать тип аргументов для каждой из функций

export const routes: Record<AppRoutes, (id?: string) => string> = {
    main: () => '/',
    about: () => '/about',
    profile: (id) => `/profile/${id}`,
    articles: () => '/articles',
    article_details: (id) => `/articles/${id}`,
    article_create: () => '/articles/new',
    article_edit: (id) => `/articles/${id}/edit`,
    admin_panel: () => '/admin',
    forbidden: () => '/forbidden',
    not_found: () => '*'
};
