import { memo } from 'react';

type Props = {
    count: number;
};

const FunctionCountComponent = (props: Props): JSX.Element => {
    const { count } = props;
    console.log('FunctionMemoCountComponent');

    return (
        <>
            <p>Count Component</p>
            {count}
        </>
    );
};

const FunctionMemoCountComponent = memo(function FunctionMemoCountComponent(props: Props): JSX.Element {
    return (
        <FunctionCountComponent
            {...props}
        />
    );
});

export default FunctionMemoCountComponent;
