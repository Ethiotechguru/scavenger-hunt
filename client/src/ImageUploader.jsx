// import React from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import { gql, graphql } from "react-apollo";
import React, { Component } from 'react'

// class Upload extends React.Component {
//     state = {
//         name: "",
//         file: null
// ``};

//     onDrop = async files => {
//         this.setState({ file: files[0] });
//     };

//     onChange = e => {
//     this.setState({
//     [e.target.name]: e.target.value
//     });
//     };

//     submit = async () => {
//     const { name, file } = this.state;

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

//     const response = await axios.post(
//         `https://api.cloudinary.com/v1_1/${
//         process.env.REACT_APP_CLOUD_NAME
//         }/image/upload`,
//     formData
//     );

//     const graphqlResponse = await this.props.mutate({
//         variables: {
//         name,
//         publicId: response.data.public_id
//         }
//     });

//     this.props.history.push(
//         `/champion/${graphqlResponse.data.createChampion.id}`
//     );
//     };

//     render() {
//     return (
//     <div>
//         <input name="name" onChange={this.onChange} value={this.state.name} />
//         <Dropzone onDrop={this.onDrop}>
//         <p>
//             Try dropping some files here, or click to select files to upload.
//             </p>
//         </Dropzone>
//         <button onClick={this.submit}>Submit</button>
//         </div>
//     );
//     }
// }


class ImageUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureUrl: ''
    }
  }

  render() {
    let clickme;
    if (this.state.pictureUrl === '') {
      clickme = 
      <div className='button'>
        <label htmlFor='single'>
          <i className="fas fa-camera-retro" />
        </label>
        <input hidden type='file' id='single' onChange={this.props.onChange} capture="camera" /> 
      </div>
    } else {
      clickme = <img src={this.state.pictureUrl} alt="target"/>
    }

    return (
      <>
        <div className="upload" >
          {clickme}
        </div>
      </>
    )
  }
}

export default ImageUploader;
