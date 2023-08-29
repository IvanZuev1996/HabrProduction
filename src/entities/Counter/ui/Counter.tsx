/* eslint-disable i18next/no-literal-string */

import { Button } from '@/shared/ui/Button';

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { add, decrement, increment } = useCounterActions();

    const handleDec = () => {
        decrement();
    };

    const handleInc = () => {
        increment();
    };

    const addFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={handleInc} data-testid="increment-btn">
                increment
            </Button>
            <Button onClick={handleDec} data-testid="decrement-btn">
                decrement
            </Button>
            <Button onClick={addFive} data-testid="add-five-btn">
                add five
            </Button>
        </div>
    );
};
