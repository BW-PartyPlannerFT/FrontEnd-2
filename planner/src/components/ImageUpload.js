import React from 'react';

const ImageUpload = () => {
    return (
      <div>
        <h1>Add photos to your event!</h1>
        <p>Upload photos below</p>
        <form>
          <input type="image" src="images/lg" alt="Submit Form" />
          <button>Submit Image</button>
        </form>
      </div>
      
      
    );
};
export default ImageUpload;