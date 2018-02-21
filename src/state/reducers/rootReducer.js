import { combineReducers } from 'redux';
import vacanciesState from './vacanciesReducer';

const rootReducer = combineReducers({
    vacanciesState
});

export default rootReducer;
