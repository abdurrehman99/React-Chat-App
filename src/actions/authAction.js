import { REGUSTER_USER } from '../actions/types';

const initialState = {
    isAuthenticated : false,
    user : {}
}

export default (state = initialState , action) => 
{

    switch(action.type)
    {
        case REGUSTER_USER :
            return
            {
                ...state,
                user  : action.payload
            }
            default : 
            return state;
    }
}