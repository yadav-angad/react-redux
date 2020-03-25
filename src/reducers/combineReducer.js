import { createStore, combineReducers } from 'redux';
import { reducer1 } from './reducer1';
import { reducer2 } from './reducer2';
import { formReducer } from './formReducer';

export const myStore = createStore(combineReducers({
    r1: reducer1,
    r2: reducer2,
    fR: formReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());