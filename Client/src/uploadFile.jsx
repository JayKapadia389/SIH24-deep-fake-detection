import { useState, useRef, useEffect } from 'react';
import './uploadFile.css';
import axios from 'axios';
import be_url from '../beUrl.js';

function UploadFile() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [videoPreviewUrl, setVideoPreviewUrl] = useState(''); // State to hold the video preview URL
    const [uploadStatus, setUploadStatus] = useState("");
    const fileInput = useRef(null);

    // Update the video preview URL whenever a new file is selected
    useEffect(() => {
        if (selectedFile) {
            const previewUrl = URL.createObjectURL(selectedFile);
            setVideoPreviewUrl(previewUrl);

            // Cleanup the object URL when the component is unmounted or a new file is selected
            return () => {
                URL.revokeObjectURL(previewUrl);
            };
        }
    }, [selectedFile]);

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
                    {videoPreviewUrl && ( // Conditionally render the video preview if a file is selected
                        <div id="video-preview-div">
                            <video id="preview-video" autoPlay loop muted>
                                <source 
                                    src={videoPreviewUrl} // Use the video preview URL
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}

                    <span style={{ color: "white" }}>Click to Upload Video</span>
                    <input
                        type='file'
                        ref={fileInput}
                        id='file-input'
                        accept="video/*"
                        onChange={(e) => { 
                            console.log(e.target.files) ;
                            setSelectedFile(e.target.files[e.target.files.length - 1]);
                        }}
                        style={{ display: 'none' }}
                    />
                </div>

                <button
                    id='upload-button'
                    onClick={() => handleUpload(selectedFile)}
                    disabled={!selectedFile}
                >
                    Upload Video
                </button>


                

                {uploadStatus && <div id="upload-status">{uploadStatus}</div>}
            </div>
                <input
                        type='file'
                        ref={fileInput}
                        id='file-input'
                        accept="video/*"
                        onChange={(e) => { 
                            console.log(e.target.files) ;
                            setSelectedFile(e.target.files[e.target.files.length - 1]);
                        }}
                        style={{ display: 'none' }}
                    />
        </div>
    );
}

export default UploadFile;
