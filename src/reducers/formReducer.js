import { UPDATE_FIRST_NAME, UPDATE_LAST_NAME, RESET } from "../actions/actionTypes";

const defaultState = {
    firstName: 'Angad',
    lastName: 'Yadav'
}

export const formReducer = (state = defaultState, action) => {
    console.log('formReducedr : ', action.type);
    switch (action.type) {
        case UPDATE_FIRST_NAME:
            const firstName = {
                ...state,
                ...action.payload
            }

            console.log('oldState: ', state);
            console.log('newState: ', firstName);
            return firstName;
        case UPDATE_LAST_NAME:
            const lastName = {
                ...state,
                ...action.payload
            }

            console.log('oldState: ', state);
            console.log('lastName: ', lastName);
            return lastName;
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
