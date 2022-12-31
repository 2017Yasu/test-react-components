import React, { memo } from 'react';


type Props = {
    count: number;
    changeText: React.ChangeEventHandler;
};

const FunctionCountComponent = (props: Props): JSX.Element => {
    const { count, changeText } = props;

    return (
        <>
            <input type='text' onChange={changeText} />
            <p>Count Component</p>
            {count}
        </>
    );
};

const FunctionCallbackHookCountComponent = memo(function FunctionCallbackHookCountComponent(props: Props): JSX.Element {
    console.log('FunctionCallbackHookCountComponent');

    return (
        <FunctionCountComponent
            {...props}
        />
    );
});

export default FunctionCallbackHookCountComponent;
