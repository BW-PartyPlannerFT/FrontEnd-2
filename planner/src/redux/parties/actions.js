// Parties need away to fetch, full CRUD
//4 actions
import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const GET_PARTY = 'GET_PARTY';
export const GET_PARTY_SUCCESS = 'GET_PARTY_SUCCESS';
export const GET_PARTY_FAIL = 'GET_PARTY_FAIL';

export const rxGetParty = () => dispatch=> {
    dispatch({type: GET_PARTY})
    axiosWithAuth()
        .get('/parties')
        .then(res=> console.log(res))
        .catch(err => console.log('There was an error fetching your data.', err.response));
}


export const ADD_PARTY = 'ADD_PARTY';
export const ADD_PARTY_SUCCESS = 'ADD_PARTY_SUCCESS';
export const ADD_PARTY_FAIL = 'ADD_PARTY_FAIL';

export const rxAddParty = party => dispatch => {
    dispatch({type: ADD_PARTY, payload: "New party being created..."});
    axiosWithAuth()
        .post('/parties', party)
        .then(res => dispatch({type: ADD_PARTY_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: ADD_PARTY_FAIL, payload: err.response}))
}


export const EDIT_PARTY = 'EDIT_PARTY';
export const DELETE_PARTY = 'DELETE_PARTY';






