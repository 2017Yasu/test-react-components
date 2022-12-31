import React, { useState } from 'react';

import FunctionMemoCountComponent from './FunctionMemoCountComponent';

export default function FunctionMemoComponent(): JSX.Element {
    console.log('FunctionMemoComponent');
    const [, setText] = useState('');
    const [count, setCount] = useState(0);

    const changeText: React.ChangeEventHandler = (e) => {
        if (!(e.target instanceof HTMLInputElement)) {
            return;
        }
        setText(e.target.value);
    };

    const countUp: React.MouseEventHandler = () => {
        setCount(count + 1);
    };

    return (
        <>
            <div>
                <p>FunctionMemoComponent</p>
            </div>
            <div>
                <input type='text' onChange={changeText} />
            </div>
            <div>
                <button onClick={countUp}>count up</button>
                <FunctionMemoCountComponent
                    count={count}
                />
            </div>
        </>
    );
}
