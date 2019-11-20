import {GET_PARTY} from './actions';

const initialState = {
    parties: [],
    isLoading: false,
    error: null
}

const partyReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PARTY:
            return {
                ...state,
                parties: [],
                isLoading: true,
                error: null
            }
        default:
            return state
    }
}
export default partyReducer;