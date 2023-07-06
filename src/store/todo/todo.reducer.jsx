import { ADD_TODO, REMOVE_TODO, UPDATE_TODO} from "./todo.actions";

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload.id);
        case 'UPDATE_TODO':
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return action.payload;
                }
                return todo;
            });
        default :
            return state;
    }
}

export default todoReducer;