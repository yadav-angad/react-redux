import { ACTION_TYPE_1, ACTION_TYPE_2 } from './actionTypes';

export const createAction1 = (value) => ({
    type: ACTION_TYPE_1,
    payload: {prop1: value}
});

export const createAction2 = (value) => ({
    type: ACTION_TYPE_2,
    payload: {prop2: value}
});