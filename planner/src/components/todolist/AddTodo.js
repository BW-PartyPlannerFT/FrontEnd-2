//Form with single input for a todo => add todo items to list. 
//ability to mark if task completed and then clear completed list onClick.
//ability to edit and delete items.

// import React, { useContext, useState } from "react";
// import Store from '../../context';


// export default function AddTodo() {
//     const { dispatch } = useContext(Store);
  
//     // Creating a local state to have currently writing
//     // todo item that will be sent to the global store.
//     const [todo, setTodo] = useState("");
  
//     function handleTodoChange(e) {
//       setTodo(e.target.value);
//     }
  
//     function handleTodoAdd() {
//       dispatch({ type: "ADD_TODO", payload: todo });
//       setTodo("");
//     }
  
//     function handleSubmitForm(event) {
//       if (event.keyCode === 13) handleTodoAdd();
//     }
  
//     return (
//       <div className="row">
//         <div className="col-md-12">
//           <br />
//           <div className="input-group">
//             <input
//               className="form-control"
//               value={todo}
//               autoFocus={true}
//               placeholder="Enter new todo"
//               onKeyUp={handleSubmitForm}
//               onChange={handleTodoChange}
//             />
//             <div className="input-group-append">
//               <button className="btn btn-primary" onClick={handleTodoAdd}>
//                 Add
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
