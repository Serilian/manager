import {ADD_EMPLOYEE, GET_EMPLOYEES} from "../actions/ActionTypes";

const initialState = {};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_EMPLOYEE:
            return state;
        case GET_EMPLOYEES:
            return {...payload};
        default:
            return state;
    }
};

export default reducer;