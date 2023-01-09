type WrapPromiseType<T> = {
    read: () => T;
};

const fetchTodoList = (): WrapPromiseType<string[]> => {
    const promise = new Promise<string[]>((res) => {
        setTimeout(() => {
            res([
                'TODO 1',
                'TODO 2',
                'TODO 3',
            ]);
        }, 5000);
    });
    return wrapPromise<string[]>(promise);
};

function wrapPromise<T>(promise: Promise<T>): WrapPromiseType<T> {
    let status = 'pending';
    let result: T;

    const suspender = promise.then(
        (r) => {
            status = 'fulfilled';
            result = r;
        },
        (e) => {
            status = 'rejected';
            result = e;
        }
    );

    const read = () => {
        if (status === 'pending') {
            throw suspender;
        } else if (status === 'rejected') {
            throw result;
        } else {
            return result;
        }
    };
    return { read };
}

const todoList = fetchTodoList();

const LazyComponent = (): JSX.Element => {
    const items = todoList.read().map((todo) => {
        return <li key={todo}>{todo}</li>;
    });
    return (
        <ul>{items}</ul>
    );
};

export default LazyComponent;
