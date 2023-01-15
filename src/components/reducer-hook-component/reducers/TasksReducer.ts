/* eslint-disable @typescript-eslint/no-explicit-any */
import { Task } from '../types/Task';

type ActionType = {
    type: string;
    data: any;
};

export const TasksActionTypes = {
    ADDED: 'added',
    CHANGED: 'changed',
    DELETED: 'deleted',
};

export function tasksReducer(tasks: Task[], action: ActionType) {
    switch (action.type) {
    case TasksActionTypes.ADDED: {
        const newTask: Task = {
            id: action.data.id,
            text: action.data.text,
            done: false,
        };
        return [
            ...tasks,
            newTask,
        ];
    }
    case TasksActionTypes.CHANGED: {
        const newTask: Task = {
            id: action.data.id,
            text: action.data.text,
            done: action.data.done,
        };
        return tasks.map((t) => {
            if (t.id === newTask.id) {
                return newTask;
            } else {
                return t;
            }
        });
    }
    case TasksActionTypes.DELETED: {
        const { id } = action.data;
        return tasks.filter((t) => t.id !== id);
    }
    default: {
        throw Error('Unknown action: ' + action.type);
    }
    }
}
