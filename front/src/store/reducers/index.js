import { combineReducers } from 'redux';
import moviesReducer from './movies-reducer';
import userReducer from './users-reducer';

export default combineReducers({
    moviesReducer: moviesReducer,
    userReducer: userReducer
});