//Renders Todo and maps over each to display ea item. 
// import React, { useContext } from "react";
// import Store from "../../context";

// import {Todo} from './Todo';

// export default function TodoList() {
//   const { state, dispatch } = useContext(Store);
//     console.log(state);
//   const pluralize = count =>
//     count > 1 ? `There are ${count} tasks on you.` : `There is ${count} todo.`;

//   let header =
//     state.state.todo_list.length === 0 ? (
//       <h4>Yay! All todos are done! Take a rest!</h4>
//     ) : (
//       <Todo>
//         <span className="float-right">{pluralize(state.state.todo_list.length)}</span>
//       </Todo>
//     );
//   return (
//     <div className="row">
//       <div className="col-md-12">
//         <div className="row">
//           <div className="col-md-12">
//             <br />
//             {header}
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12">
//             <ul className="list-group">
//               {state.state.todo_list.map(t => (
//                 <li key={t.task.id} className="list-group-item">
//                   {t.task}
//                   <button
//                     className="float-right btn btn-danger btn-sm"
//                     style={{ marginLeft: 10 }}
//                     onClick={() => dispatch({ type: "COMPLETE", payload: t })}
//                   >
//                     Complete
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
//  }
 