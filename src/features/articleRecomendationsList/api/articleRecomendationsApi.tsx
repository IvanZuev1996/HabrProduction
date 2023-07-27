import { rtkApi } from 'shared/api/rtkApi';

const recomendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecomendationsList: build.query({
            query: (limit: number) => ({
                url: '/articles',
                params: {
                    _limit: limit
                }
            })
        })
    })
});

export const useArticleRecomendationsList =
    recomendationsApi.useGetArticleRecomendationsListQuery;
