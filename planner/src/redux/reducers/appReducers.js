//DO NOT CHANGE CODE IN THIS FILE
import {ADD_TODO, CLEAR_TODO, TOGGLE_COMPLETED, UPDATE_TODO} from '../actionTypes/appActions';

export const appReducers = (state, action) => {
    switch(action.type) {
        case ADD_TODO:
            let newItem = {
                id: Date.now(),
                task: action.payload,
                completed: false
            };
            return {
                ...state,
                todo_list: [...state.todo_list, newItem]
            };

        case TOGGLE_COMPLETED:
            let updatedTodos = state.todo_list.task.map(item => {
                if(item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                }else {
                    return item;
                }
            });
                return {
                    ...state,
                    todo_list: updatedTodos
                };
                
        case CLEAR_TODO:
            return {
                ...state,
                todo_list: state.todo_list.task.filter(item => !item.completed)
            };
            default:
                return state;        
    }
}