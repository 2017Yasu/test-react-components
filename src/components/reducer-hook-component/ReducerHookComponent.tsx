import { useReducer } from 'react';

import { TasksActionTypes, tasksReducer } from './reducers/TasksReducer';
import { Task } from './types/Task';
import AddTask from './AddTask';
import TaskList from './TaskList';

import './ReducerHookComponent.scss';

export default function ReducerHookComponent(): JSX.Element {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    function handleAddTask(text: string) {
        const newTask = {
            id: nextId++,
            text: text,
        };
        dispatch({
            type: TasksActionTypes.ADDED,
            data: newTask,
        });
    }

    function handleChangeTask(task: Task) {
        dispatch({
            type: TasksActionTypes.CHANGED,
            data: task,
        });
    }

    function handleDeleteTask(taskId: number) {
        dispatch({
            type: TasksActionTypes.DELETED,
            data: { id: taskId },
        });
    }

    return (
        <>
            <h1>Prague itinerary</h1>
            <AddTask onAddTask={handleAddTask} />
            <div className='taskList'>
                <TaskList
                    tasks={tasks}
                    onChangeTask={handleChangeTask}
                    onDeleteTask={handleDeleteTask}
                />
            </div>
        </>
    );
}

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];
