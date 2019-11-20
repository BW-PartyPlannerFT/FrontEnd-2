import {combineReducers} from 'redux';
import partyReducer from './parties/reducer';
import picturesReducer from './pictures/reducers';

export default combineReducers({
    partyReducer,
    picturesReducer
})
