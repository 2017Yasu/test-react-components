import React, { useState, useCallback } from 'react';

import FunctionCallbackHookCountComponent from './FunctionCallbackHookCountComponent';

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

    const changeTextCallback = useCallback(changeText, [setText]);

    const countUp: React.MouseEventHandler = () => {
        setCount(count + 1);
    };

    return (
        <>
            <div>
                <p>SampleFunctionComponent</p>
            </div>
            <div>
                <button onClick={countUp}>count up</button>
                <FunctionCallbackHookCountComponent
                    count={count}
                    changeText={changeTextCallback}
                />
            </div>
        </>
    );
}
