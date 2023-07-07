import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import toDoReducer from './todo/todo.reducer';

export const store = createStore (toDoReducer, applyMiddleware(thunk))