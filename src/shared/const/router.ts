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

// export const routes: Record<AppRoutes, (id?: string) => string> = {
//     main: () => '/',
//     about: () => '/about',
//     profile: (id) => `/profile/${id}`,
//     articles: () => '/articles',
//     article_details: (id) => `/articles/${id}`,
//     article_create: () => '/articles/new',
//     article_edit: (id) => `/articles/${id}/edit`,
//     admin_panel: () => '/admin',
//     forbidden: () => '/forbidden',
//     not_found: () => '*'
// };

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
export const getRouteNotFound = () => '*';
