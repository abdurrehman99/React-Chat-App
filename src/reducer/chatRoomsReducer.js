import { FETCH_CHATROOMS } from '../actions/types'

const initialState = {
    conversation : [],
}
export default (state = initialState , action) => {
    switch(action.type){
        case FETCH_CHATROOMS:
            return {
                ...state,
                conversation : action.payload
            }
            default:
                return state;
    }
}