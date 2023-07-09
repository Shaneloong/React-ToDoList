import {ADD_TODO, REMOVE_TODO, UPDATE_TODO, SORT_ASC, SORT_DESC, COMPLETE_TODO} from "./todo.type";
import {v4} from "uuid";
export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload :todo
});


export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id
});


export const updateTodo = (todo) => ({
    type: UPDATE_TODO,
    payload: todo
});

export const completeTodo = (id) => ({
    type: COMPLETE_TODO,
    payload: id
});

export const sortAsc = () => ({
    type: SORT_ASC
});

export const sortDesc = () => ({
    type: SORT_DESC
});




