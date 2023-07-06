import {createStore} from 'redux';
import todoReducer from '../todo/todo.reducer';

export default createStore (todoReducer)