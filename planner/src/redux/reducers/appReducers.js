//DO NOT CHANGE CODE IN THIS FILE
import {ADD_TODO} from '../actionTypes/appActions';

export default function reducer(state, action){
    switch(action.type){
        case ADD_TODO :
            if(!action.payload){
                return state;
            }
            if(state.todos)
    }
}