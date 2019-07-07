import {START_LOADING, STOP_LOADING} from '../actions/ActionTypes';

const initialState = {
    loading: false
};

const reducer = (state = initialState, action) => {
    const {type} = action;
    switch (type) {
        case START_LOADING:
            return {
                ...state,
                loading: true
            };
        case STOP_LOADING:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;