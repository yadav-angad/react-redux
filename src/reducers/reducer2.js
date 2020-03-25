import { ACTION_TYPE_3, ACTION_TYPE_4, RESET } from "../actions/actionTypes";

const defaultState = {
    prop3: 'Hello 3',
    prop4: 'Hello 4'
}

export const reducer2 = (state = defaultState, action) => {
    console.log('reducer2 : ', action.type);
    switch (action.type) {
        case ACTION_TYPE_3:
        case ACTION_TYPE_4:
            const newState = {
                ...state,
                ...action.payload
            }

            console.log('oldState: ', state);
            console.log('newState: ', newState);
            return newState;
        case RESET:
            console.log('r2 reset called');
            const originalState = {
                ...state,
                ...defaultState
            };
            console.log('r2 originalState : ', originalState);
            return originalState;
        default:
            return state;
    }
};
