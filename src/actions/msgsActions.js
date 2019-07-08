import { SEND_MSG } from '../actions/types';

export const sendMsg  = (currentMessage) => 
{
    return (
        {
            type : SEND_MSG, 
            payload : currentMessage
        }
    ) 
}
