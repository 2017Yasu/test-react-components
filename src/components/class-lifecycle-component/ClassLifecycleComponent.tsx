import React from 'react';

type Props = {
    title: string;
};

type State = {
    date: Date;
    seconds: number;
};

export default class ClassLifecycleComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            date: new Date(),
            seconds: 0,
        };
    }

    private timer: NodeJS.Timer | undefined;

    componentDidMount(): void {
        // 初めてレンダーされた後
        this.timer = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(): void {
        // コンポーネントが破棄される時
        clearInterval(this.timer);
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): void {
        // ２回目以降レンダーされた後
        // ここで setState する時は条件をつけること！
        if (prevState.date !== this.state.date) {
            this.setState((ps: State) => {
                return {
                    ...ps,
                    seconds: ps.seconds + 1,
                };
            });
        }
    }

    tick(): void {
        this.setState((prevState: State) => {
            return {
                ...prevState,
                date: new Date(),
            };
        });
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log('error catch!', error, errorInfo);
        clearInterval(this.timer);
    }

    render(): JSX.Element {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
                <h3>{this.state.seconds}s passed since first rendered.</h3>
            </div>
        );
    }
}
