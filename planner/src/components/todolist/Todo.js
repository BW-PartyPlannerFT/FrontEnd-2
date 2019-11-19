// Rendered in TodoList
// Displays list of items and toggle completed.

import React from 'react';


const Todo = props => {
    console.log('todo props', props);
    const toggleItem = () => {
        props.toggleItem(props.task.id)
};
return (
    <div className="todoContainer">
        <p className={`item${props.task.completed ? ' completed' : ''}`} 
        onClick={toggleItem}>{props.task.task}</p>
    </div>
)
};


export default Todo;