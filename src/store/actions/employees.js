import {ADD_EMPLOYEE} from "./ActionTypes";
import {setAlert} from "./alerts";
import {Actions} from "react-native-router-flux";


export const addEmployee = (formData) => dispatch => {

    dispatch({
        type: ADD_EMPLOYEE,
        payload: formData
    });
    Actions.pop();

    dispatch(setAlert("Employee added"));
};
