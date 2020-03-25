import { ACTION_TYPE_1, ACTION_TYPE_2, RESET } from "../actions/actionTypes";

const defaultState = {
    prop1: 'Hello 1',
    prop2: 'Hello 2'
}

export const reducer1 = (state = defaultState, action) => {
    console.log('reducer1 : ', action.type);
    switch (action.type) {
        case ACTION_TYPE_1:
        case ACTION_TYPE_2:
            const newState = {
                ...state,
                ...action.payload
            }

            console.log('oldState: ', state);
            console.log('newState: ', newState);
            return newState;
        case RESET:
            console.log('r1 reset called');
            const originalState = {
                ...state,
                ...defaultState
            };
            console.log('r1 originalState : ', originalState);
            return originalState;
        default:
            return state;
    }
};
