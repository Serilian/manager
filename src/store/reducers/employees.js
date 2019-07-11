import {ADD_EMPLOYEE} from "../actions/ActionTypes";

const initialState = [
    {
        name: 'Filip',
        phone: '555-5555-55',
        shift: ''
    }
];

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_EMPLOYEE:
            return [payload, ...state];
        default:
            return state;
    }
};

export default reducer;