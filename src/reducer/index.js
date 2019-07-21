import { combineReducers } from 'redux';
import authReducer from './authReducer';
import msgReducer from './msgsReducer';
import chatRoomsReducer from  './chatRoomsReducer';

export default combineReducers 
({
    auth : authReducer,
    msg : msgReducer,
    chatRooms : chatRoomsReducer,
}); 