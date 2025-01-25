import { CREATE_TASK, DELETE_TASK, TOGGLE_COMPLETED, UPDATE_TASK } from "./TaskTypes"

export const createTask = (data) => {
    return {
        type: CREATE_TASK,
        payload: {text: data , isCompleted: false}
    }
}

export const updateTask = (text , index) => {
    return {
        type: UPDATE_TASK,
        payload: {text: text , index: index }
    }
}

export const toggleCompleted = (index , isCompleted) => {
    return {
        type: TOGGLE_COMPLETED,
        payload: {index , isCompleted}
    }
}

export const deleteTask = (index) => {
    return {
        type: DELETE_TASK,
        payload: {index}
    }
}