import React, { Component } from 'react';
// import styled from "styled-components";
import axios from 'axios';
import styled from "styled-components";
const Card = styled.div`
width: 50%;
padding: 10px;
box-shadow: 1px 1px 5px black;
border-radius: 10px;
margin: 20px auto;
display: flex;
justify-content: space-between;
`;

const CardStyle = styled.div `    
    background: lightblue;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    transition: transform 0.2s ease-in;
     border: 5px solid black;
    &:hover {
      transform: translate(-5px) scale(1.05);
    }

    `;

class ImageUpload extends Component {
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })

  }
  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('', fd, {
    onUploadProgress: progressEvent => {
      console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100 ) + '%' );
    }
  })
    .then(res => {
      console.log(res);
    });
}

render() {
    return (
     <Card> <CardStyle><div>
        <h1>Add photos to your event!</h1>
        <p>Upload photos below</p>
        <form>
          <input 
          style={{display: 'none'}}
          type="image" src="images/lg" alt="Submit Form" 
          onChange={this.fileSelectedHandler} 
          ref={fileInput => this.fileInput = fileInput}/>
          <button onClick={() => this.fileInput.click}>Upload</button>
          <button onClick={this.fileUploadHandler}>Submit Image</button>
        </form>
      </div></CardStyle>
      </Card>
      
    );
}
};
export default ImageUpload;