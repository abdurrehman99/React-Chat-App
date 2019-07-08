import { SEND_MSG } from '../actions/types'

const initialState = {
    conversation : [],
}
export default (state = initialState , action) => {
    switch(action.type){
        case SEND_MSG:
            return {
                ...state,
                conversation : action.payload
            }
            default:
                return state;
    }
}