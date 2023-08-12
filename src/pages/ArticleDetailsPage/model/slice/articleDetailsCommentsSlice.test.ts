import { Comment } from '@/entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

const comments: Comment[] = [
    {
        id: '1',
        text: 'some comment 1',
        user: {
            id: '1',
            username: 'admin',
            avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
        }
    },
    {
        id: '2',
        text: 'some comment 2',
        user: {
            id: '1',
            username: 'admin',
            avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
        }
    },
    {
        id: '3',
        text: 'some comment 3',
        user: {
            id: '2',
            username: 'user',
            avatar: 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png'
        }
    }
];

describe('articleDetailsCommentsSlice.test', () => {
    test('test fetchCommentsByArticleId service pending', () => {
        const state: DeepPartial<ArticleDetailsCommentSchema> = {
            error: undefined,
            isLoading: false
        };
        expect(
            articleDetailsCommentsReducer(
                state as ArticleDetailsCommentSchema,
                fetchCommentsByArticleId.pending
            )
        ).toEqual({ error: undefined, isLoading: true });
    });

    test('test fetchCommentsByArticleId service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsCommentSchema> = {
            error: undefined,
            isLoading: false,
            entities: {},
            ids: []
        };
        expect(
            articleDetailsCommentsReducer(
                state as ArticleDetailsCommentSchema,
                fetchCommentsByArticleId.fulfilled(comments, '', '1')
            )
        ).toEqual({
            isLoading: false,
            entities: {
                '1': {
                    id: '1',
                    text: 'some comment 1',
                    user: {
                        id: '1',
                        username: 'admin',
                        avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
                    }
                },
                '2': {
                    id: '2',
                    text: 'some comment 2',
                    user: {
                        id: '1',
                        username: 'admin',
                        avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
                    }
                },
                '3': {
                    id: '3',
                    text: 'some comment 3',
                    user: {
                        id: '2',
                        username: 'user',
                        avatar: 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png'
                    }
                }
            },
            ids: ['1', '2', '3']
        });
    });
});
