import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, SORT_ASC, COMPLETE_TODO, SORT_DESC} from "./todo.type";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

const toDoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            state.push(action.payload);
            return state;
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        case 'UPDATE_TODO':
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return action.payload;
                }
                return todo;
            });
        case 'COMPLETE_TODO':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true
                    };
                }
                return todo;
            });
        case 'SORT_ASC':
            return state.sort((a, b) => a.item.localeCompare(b.item));
        case 'SORT_DESC':
            return state.sort((a, b) => b.item.localeCompare(a.item));
        default :
            return state;
    }
}

// const todoSlice = createSlice({
//     name: 'todos',
//     initialState: INITIAL_STATE,
//     reducers: {
//         addTodo: (state, action) => {
//             state.push(action.payload);
//             return state;
//         },
//         removeTodo: (state, action) => {
//             return state.filter(todo => todo.id !== action.payload.id);
//         },
//         updateTodo: (state, action) => {
//             return state.map(todo => {
//                 if (todo.id === action.payload.id) {
//                     return {
//                         ...todo,
//                         item: action.payload.item
//                     }
//                 }
//                 return todo;
//             });
//         },
//         completeTodo: (state, action) => {
//             return state.map(todo => {
//                 if (todo.id === action.payload.id) {
//                     return {
//                         ...todo,
//                         completed: true
//                     };
//                 }
//                 return todo;
//             });
//         }
//     }
// })
//
// export const { addTodo, removeTodo, updateTodo, completeTodo } = todoSlice.actions;
// export const toDoReducer =  todoSlice.reducer;

export default toDoReducer;
