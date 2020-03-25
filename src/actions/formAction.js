import { UPDATE_FIRST_NAME, UPDATE_LAST_NAME } from './actionTypes';

export const updateFirstName = (value) => ({
    type: UPDATE_FIRST_NAME,
    payload: {firstName: value}
});

export const updateLastName = (value) => ({
    type: UPDATE_LAST_NAME,
    payload: {lastName: value}
});