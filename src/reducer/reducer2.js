import { ACTION_TYPE_2 } from "../action/actionTypes";

const defaultValue = {
    prop3: 'Hello 3',
    prop4: 'Hello 4'
}

export const reducer2 = (state = defaultValue, action) => {
    switch (action.type) {
        case ACTION_TYPE_2:
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
