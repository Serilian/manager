import {CREATE_USER, LOGIN_USER, REMOVE_USER, SET_USER} from '../actions/ActionTypes';

const initialState = {
    loggedIn: false,
    user: {}
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case LOGIN_USER:
            return {
                ...state,
                loggedIn: true
            };
        case SET_USER:
        case CREATE_USER:
            return {
                ...state,
                user: payload
            };
        case REMOVE_USER:
            return {
                ...state,
                user: null,
                loggedIn: false
        };
        default:
            return state;
    }
};

export default reducer;