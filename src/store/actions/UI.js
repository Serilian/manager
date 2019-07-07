import {START_LOADING, STOP_LOADING} from "./ActionTypes";


export const UIStartLoading = () => dispatch => {
    dispatch({
        type: START_LOADING
    })
};

export const UIStopLoading = () => dispatch => {
    dispatch({
        type: STOP_LOADING
    })
};