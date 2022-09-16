import { useState } from 'react';
import './Counter.scss';

export const Counter = () => {
    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(value + 1);
    };

    return (
        <div>
            <div>{value}</div>
            <button onClick={increment}>Encrement</button>
        </div>
    );
};
