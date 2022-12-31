import { memo } from 'react';

type Props = {
    count: number;
};

const FunctionCountComponent = (props: Props): JSX.Element => {
    const { count } = props;

    return (
        <>
            <p>Count Component</p>
            {count}
        </>
    );
};

const FunctionMemoCountComponent = memo(function FunctionMemoCountComponent(props: Props): JSX.Element {
    console.log('FunctionMemoCountComponent');

    return (
        <FunctionCountComponent
            {...props}
        />
    );
});

export default FunctionMemoCountComponent;
