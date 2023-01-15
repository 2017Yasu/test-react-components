import { useState } from 'react';

import { Task } from './types/Task';

type ListProps = {
    tasks: Task[];
    onChangeTask: (task: Task) => void;
    onDeleteTask: (id: number) => void;
};

export default function TaskList({ tasks, onChangeTask, onDeleteTask }: ListProps): JSX.Element {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <TaskComponent task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                </li>
            ))}
        </ul>
    );
}

type TaskProps = {
    task: Task;
    onChange: (task: Task) => void;
    onDelete: (id: number) => void;
};

function TaskComponent({ task, onChange, onDelete }: TaskProps): JSX.Element {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    className='task__name'
                    value={task.text}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            text: e.target.value,
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                <span className='task__name'>{task.text}</span>
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }
    return (
        <div className='task__container'>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                    onChange({
                        ...task,
                        done: e.target.checked,
                    });
                }}
            />
            {taskContent}
            <button className='btn-del' onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
}
