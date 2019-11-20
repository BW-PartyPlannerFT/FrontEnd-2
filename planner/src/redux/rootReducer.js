import {combineReducers} from 'redux';
import partyReducer from './parties/reducer';
import picturesReducer from './pictures/reducers';
import categoryReducer from './categories/reducer';

export default combineReducers({
    partyReducer,
    picturesReducer,
    categoryReducer
})
