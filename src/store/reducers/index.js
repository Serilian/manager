import {combineReducers} from 'redux'
import auth from './auth';
import alerts from './alerts';
import ui from './ui';
import employees from './employees'

export default combineReducers({
    auth,
    alerts,
    ui,
    employees
})