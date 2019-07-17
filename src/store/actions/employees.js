import {ADD_EMPLOYEE, GET_EMPLOYEES, EMPLOYEE_UPDATE} from "./ActionTypes";
import {setAlert} from "./alerts";
import {Actions} from "react-native-router-flux";
import firebase from 'firebase';
import {UIStartLoading, UIStopLoading} from "./UI";

export const addEmployee = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_EMPLOYEE
        });

        const userId = firebase.auth().currentUser.uid;

        await firebase.database().ref(`users/${userId}/employees`).push(formData);

        Actions.main();

        dispatch(setAlert("Employee added"));

    } catch (err) {
        dispatch(setAlert("Error adding employee"));
        console.log(err);
    }
};

export const getEmployees = () => async dispatch => {

    try {
        dispatch(UIStartLoading());
        const userId = firebase.auth().currentUser.uid;
        await firebase.database().ref(`users/${userId}/employees/`).once("value", snapshot => {
            dispatch({
                type: GET_EMPLOYEES,
                payload: snapshot.val()
            });
        });
        dispatch(UIStopLoading());
    } catch (err) {
        console.log(err);
        dispatch(UIStopLoading());
    }
};

export const updateEmployee = (id, data) => async dispatch => {

    try {
        dispatch({
            type: EMPLOYEE_UPDATE
        });
        const userId = firebase.auth().currentUser.uid;

        await firebase.database().ref(`users/${userId}/employees/${id}`).update(data);

        Actions.main();
        dispatch(setAlert("Employee changes saved"));
    } catch (err) {
        dispatch(setAlert("Error updating employee"));
        console.log(err);
    }

};

export const removeEmployee = (id) => async dispatch => {
    try {
        dispatch({
            type: ADD_EMPLOYEE,
        });

        const userId = firebase.auth().currentUser.uid;

        await firebase.database().ref(`users/${userId}/employees/${id}`).remove();

        Actions.main();

        dispatch(setAlert("Employee removed"));
    } catch (err) {
        dispatch(setAlert("Error deleting employee"));
        console.log(err);
    }
};