import React, { useState } from 'react';

import FunctionMemoCountComponent from './FunctionMemoCountComponent';

export default function SampleFunctionComponent() {
    console.log('SampleFunctionComponent');
    const [text, setText] = useState('');
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
                <p>SampleFunctionComponent</p>
                <input type="text" onChange={changeText} />
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
