//This component will be rendered by PartyList
// Grid to display saved pictures.
// Input to add image url and upload pics for saved ideas.
// Ability to delete  picture
//Rendered by PartyBoard
// import React from 'react';
// import ImageUpload from './ImageUpload';
// import Pic from './Pic';


// const Pictures = (props) => {
//   console.log('pictures props', props)
  
//   const addImage = pics => {
//     setInput([...input, pics])
//   }
//     return (
//       <div>
//           <ImageUpload addImage={addImage}/>
//           <img src={props.url} alt = 'party ideas'/>
//           {props.members.map(pic => {
//             return (
//             <Pic key={pic.url}
//                      input={pic.input}
//                       setInput={setInput}/>
                               
//           )})}
          
//           <p>{props.url}</p>
//       </div>
//     );
// };
// export default Pictures;