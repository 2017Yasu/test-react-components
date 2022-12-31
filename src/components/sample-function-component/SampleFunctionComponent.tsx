import React, { useState } from 'react';

import FunctionCountComponent from './FunctionCountComponent';

export default function SampleFunctionComponent(): JSX.Element {
    console.log('SampleFunctionComponent');
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
                <p>SampleFunctionComponent</p>
            </div>
            <div>
                <input type='text' onChange={changeText} />
            </div>
            <div>
                <button onClick={countUp}>count up</button>
                <FunctionCountComponent
                    count={count}
                />
            </div>
        </>
    );
}
