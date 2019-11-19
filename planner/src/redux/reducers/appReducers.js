//DO NOT CHANGE CODE IN THIS FILE
import {ADD_TODO, GET_TODOS, COMPLETE} from '../actionTypes/appActions';

export default function reducer(state, action){
    switch(action.type){
        case ADD_TODO :
            //return if is state empty
            if(!action.payload){
                return state;
            }
            //return is current state duplicate
            if(state.todo_list.includes(action.payload)){
                return state;
            }
            return {
                ...state,
                todo_list:[...state.todo_list, action.payload]
            };
        case GET_TODOS :
            return {
                ...state,
                todo_list:[...state.todos]
            }
        case COMPLETE :
            return {
                ...state,
                todo_list: state.todo_list.filter(t => t !== action.payload)
            }
        default:
            return state;
    }
}