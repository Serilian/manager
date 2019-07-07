import firebase from 'firebase';
import {LOGIN_USER, SET_USER, CREATE_USER} from "./ActionTypes";
import {setAlert} from "./alerts";
import {UIStartLoading, UIStopLoading} from "./UI";

export const onLogin = (email, password) => async (dispatch) => {

    try {
        dispatch(UIStartLoading());

        await firebase.auth().signInWithEmailAndPassword(email, password);

        dispatch({
            type: LOGIN_USER
        });
        dispatch(setAlert("Login successful"));

        dispatch(UIStopLoading());
    } catch (err) {
        if (err.code === "auth/user-not-found") {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                dispatch({
                    type: CREATE_USER,
                });
                dispatch(setAlert("Login successful"));
                dispatch(UIStopLoading());
            } catch (err) {
                console.log(err);
                dispatch(setAlert("Login failed"));
                dispatch(UIStopLoading());
            }
        } else {
            console.log(err);
            dispatch(setAlert("Login failed"));
            dispatch(UIStopLoading());
        }
    }

};


export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
};