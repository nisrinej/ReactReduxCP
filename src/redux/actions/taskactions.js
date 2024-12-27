import { ADD_TASK, EDIT_TASK, FILTER_TASK } from "./taskActionTypes";

export const addTask = (task) => {

    return {
        type: ADD_TASK,
        payload: task,
    };
};

export const editTask = (id, description, isDone) => {
    return {
        type: EDIT_TASK,
        payload: {
            id,
            description,
            isDone,
        },
    };
};

export const filterTask = (filter) => {
    return {
        type: FILTER_TASK,
        payload: filter,
    };
};

