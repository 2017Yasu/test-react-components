import React, { memo } from 'react';


type Props = {
    count: number;
    changeText: React.ChangeEventHandler;
};

const FunctionCountComponent = (props: Props): JSX.Element => {
    const { count, changeText } = props;
    console.log('FunctionCallbackHookCountComponent');

    return (
        <>
            <input type='text' onChange={changeText} />
            <p>Count Component</p>
            {count}
        </>
    );
};

const FunctionCallbackHookCountComponent = memo(function FunctionCallbackHookCountComponent(props: Props): JSX.Element {
    return (
        <FunctionCountComponent
            {...props}
        />
    );
});

export default FunctionCallbackHookCountComponent;
