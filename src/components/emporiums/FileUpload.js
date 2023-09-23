import React from "react";
import axios from "axios";
const FileUpload = () => {
  const handleFileUpload = (event) => {
    // get the selected file from the input
    const file = event.target.files[0];
    // create a new FormData object and append the file to it
    const formData = new FormData();
    formData.append("file", file);
    // make a POST request to the File Upload API with the FormData object and Rapid API headers
    axios
      .post("http://127.0.0.1:8000/shop/image/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        //   "x-rapidapi-host": "file-upload8.p.rapidapi.com",
        //   "x-rapidapi-key": "your-rapidapi-key-here",
        },
      })
      .then((response) => {
		// handle the response
        console.log(response);
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });
  };
  // render a simple input element with an onChange event listener that calls the handleFileUpload function
  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};
export default FileUpload;