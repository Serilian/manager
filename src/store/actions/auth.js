import firebase from 'firebase';
import {LOGIN_USER, SET_USER} from "./ActionTypes";
import {setAlert} from "./alerts";

export const onLogin = (email, password) => async (dispatch) => {

    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);

        dispatch({
            type: LOGIN_USER,
        });
        dispatch(setAlert("Login successful"));

    } catch (err) {
        if (err.code === "auth/user-not-found") {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                dispatch({
                    type: LOGIN_USER,
                });
                dispatch(setAlert("Login successfull"));
            } catch (err) {
                console.log(err);
                dispatch(setAlert("Login failed"));
            }
        } else {
            dispatch(setAlert("Login failed"));
        }
    }

};


export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
};