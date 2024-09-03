import { useState, useRef } from 'react';
import './uploadFile.css';
import axios from 'axios';
import be_url from '../beUrl.js';

function UploadFile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const fileInput = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setUploadStatus("");

    if (file) {
      handleUpload(file); // Automatically upload the file when selected
    }
  };

  const handleUpload = (file) => {
    if (file) {
      const formData = new FormData();
      formData.append('video', file);

      axios.post(be_url + "/predict", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      })
        .then((res) => {
          console.log("Upload successful:", res);
          setUploadStatus("File uploaded successfully!");
        })
        .catch((err) => {
          console.error("Upload error:", err);
          setUploadStatus("Failed to upload file.");
        });
    } else {
      console.log("No file selected");
      setUploadStatus("No file selected.");
    }
  };

  return (
    <div id='upload-file-wrap'>
      <div className="upload-file">
        <div
          id="upload-file-area"
          onClick={() => fileInput.current.click()}
        >
          <span style={{ color: "white" }}>Click to Upload Video</span>
          <input
            type='file'
            ref={fileInput}
            id='file-input'
            accept="video/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>

        <button
          id='upload-button'
          onClick={() => handleUpload(selectedFile)}
          disabled={!selectedFile} // Disable the button if no file is selected
        >
          Upload Video
        </button>

        {/* Display the upload status */}
        {uploadStatus && <div id="upload-status">{uploadStatus}</div>}
      </div>
    </div>
  );
}

export default UploadFile;
