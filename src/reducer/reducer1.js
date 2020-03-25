import { ACTION_TYPE_1 } from "../action/actionTypes";

const defaultValue = {
    prop1: 'Hello 1',
    prop2: 'Hello 2'
}

export const reducer1 = (state = defaultValue, action) => {
    switch (action.type) {
        case ACTION_TYPE_1:
            const newState = {
                ...state,
                ...action.payload
            }

            console.log('newState: ' + newState.toString());
            return newState;
        default:
            return state;
    }
};
