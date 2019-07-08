import { combineReducers } from 'redux';
import authReducer from './authReducer';
import msgReducer from './msgsReducer';

export default combineReducers ({
    auth : authReducer,
    msg : msgReducer,
}); 