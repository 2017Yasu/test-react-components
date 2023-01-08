type Props = {
    celsius: number;
};

export default function BoilingVerdict(props: Props): JSX.Element {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}
