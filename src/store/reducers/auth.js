import {LOGIN_USER, SET_USER} from '../actions/ActionTypes';

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
            return {
                ...state,
                user: payload
            };
        default:
            return state;
    }
};

export default reducer;