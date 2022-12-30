type Props = {
    count: number;
};

const FunctionCountComponent = (props: Props): JSX.Element => {
    const { count } = props;
    console.log('FunctionCountComponent');

    return (
        <>
            <p>Count Component</p>
            {count}
        </>
    );
};

export default FunctionCountComponent;
