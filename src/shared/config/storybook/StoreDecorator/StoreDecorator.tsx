/* eslint-disable babun4ek-fsd-plugin/public-api-imports */
// TODO:
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slices/addCommentFormSlice';
import { loginReducer } from '@/features/AuthByUserName/model/slice/loginSlice';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slice';
import { articlesPageReducer } from '@/pages/ArticlesPage/model/slices/articlesPageSlice';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articlesPage: articlesPageReducer,
    articleDetailsPage: articleDetailsPageReducer
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) =>
        (StoryComponent: Story) =>
            (
                <StoreProvider
                    initialState={state}
                    asyncReducers={{ ...defaultReducers, ...asyncReducers }}
                >
                    <StoryComponent />
                </StoreProvider>
            );
