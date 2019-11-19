// Rendered in TodoList
// Displays list of items and toggle completed.

import React from "react";

export const Todo = (props) => (
    
  <div className="row">
    <div className="col-md-8">
      <h5>Todo List</h5>
    </div>
    <div className="col-md-4">
      {props.children}
      {console.log('todo props',props.children)}
    </div>
  </div>
);

