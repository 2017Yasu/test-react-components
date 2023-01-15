import { useState } from 'react';

type Props = {
    onAddTask: (text: string) => void;
};

export default function AddTask({ onAddTask }: Props): JSX.Element {
    const [text, setText] = useState('');
    return (
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    setText('');
                    onAddTask(text);
                }}>
                Add
            </button>
        </>
    );
}
