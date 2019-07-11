import { SET_ALERT, REMOVE_ALERT, CLEAR_ALERTS } from "./ActionTypes";
import uuid from "uuid";


export const setAlert = (msg, alertType) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: SET_ALERT,
        payload: { id, msg, alertType }
    });
    setTimeout(()=>{
        dispatch({
            type: REMOVE_ALERT,
            payload: id
        })
    }, 5000);
};

export const clearAlerts = () => dispatch => {
    dispatch({
        type: CLEAR_ALERTS
    })
};