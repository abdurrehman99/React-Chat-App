import { FETCH_CHATROOMS } from '../actions/types';
import firebase from 'firebase';
import fire from '../config';

export const getChatRooms  = (currentMessage) => 
{

    var db = fire.database().ref().child('users');
    db.on('child_added',(snapshot) =>
    {
        console.log(snapshot.val());
        
    });
    return (
        {
            type : FETCH_CHATROOMS, 
            payload : currentMessage
        }
    ); 
}
