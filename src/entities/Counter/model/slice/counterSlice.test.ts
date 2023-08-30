import { CounterSchema } from '../types/counterSchema';

import { counterReducer, counterAction } from './counterSlice';

describe('counterSlice.test', () => {
    test('increment', () => {
        const state: CounterSchema = {
            value: 10
        };
        expect(counterReducer(state, counterAction.increment)).toEqual({
            value: 11
        });
    });

    test('decrement', () => {
        const state: CounterSchema = {
            value: 10
        };
        expect(counterReducer(state, counterAction.decrement)).toEqual({
            value: 9
        });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterAction.increment)).toEqual({
            value: 1
        });
    });
});
