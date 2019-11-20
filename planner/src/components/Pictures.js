//This component will be rendered by PartyList
// Grid to display saved pictures.
// Input to add image url and upload pics for saved ideas.
// Ability to delete  picture
//Rendered by PartyBoard
import React from 'react';


const Images= () => {
    return (
      <div>
          <form>
          <input type="image" src="images/lg" alt="Submit Form" />
          <button>Submit Image</button>
        </form>
      </div>
    );
};
export default Images;