import {combineReducers} from 'redux'
import auth from './auth';
import alerts from './alerts';
import ui from './ui';

export default combineReducers({
    auth,
    alerts,
    ui
})