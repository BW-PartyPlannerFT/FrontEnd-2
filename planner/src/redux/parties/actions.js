// Parties need away to fetch, full CRUD
//4 actions
import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const GET_PARTY = 'GET_PARTY';
export const GET_PARTY_SUCCESSS = 'GET_PARTY_SUCCESSS';
export const GET_PARTY_FAIL = 'GET_PARTY_FAIL';

export const reduxGetParty = () => dispatch=> {
    dispatch({type: GET_PARTY})
    axiosWithAuth()
        .get('/parties')
        .then(res=> console.log(res))
        .catch(err => console.log('There was an error fetching your data.', err.response));
}


export const ADD_PARTY = 'ADD_PARTY';
export const EDIT_PARTY = 'EDIT_PARTY';
export const DELETE_PARTY = 'DELETE_PARTY';






