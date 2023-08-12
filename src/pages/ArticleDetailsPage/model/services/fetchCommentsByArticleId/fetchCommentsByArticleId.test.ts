import { Comment } from '@/entities/Comment';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

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

describe('fetchCommentsByArticleId.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(
            Promise.resolve({
                data: comments
            })
        );
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(comments);
    });

    test('fetch comments with error', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(
            Promise.resolve({
                status: 403
            })
        );
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
