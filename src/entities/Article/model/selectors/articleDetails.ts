import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const getArticleDetailsData = (state: StateSchema) =>
    state.articleDetails?.data;

export const getArticleDetailsIsLoading = (state: StateSchema) =>
    state.articleDetails?.isLoading;

export const getArticleDetailsError = (state: StateSchema) =>
    state.articleDetails?.error;

export const [useTest] = buildSelector(
    (state: StateSchema, id: string) => state.articlesPage?.entities[id]
);
