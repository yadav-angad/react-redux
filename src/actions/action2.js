import { ACTION_TYPE_3, ACTION_TYPE_4 } from './actionTypes';

export const createAction3 = (value) => ({
    type: ACTION_TYPE_3,
    payload: {prop3: value}
});

export const createAction4 = (value) => ({
    type: ACTION_TYPE_4,
    payload: {prop4: value}
});