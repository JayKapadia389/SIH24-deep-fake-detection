import { useState, useRef, useEffect } from 'react';
import './uploadFile.css';
import axios from 'axios';
import { IoIosInformationCircleOutline } from "react-icons/io";
import be_url from '../beUrl.js';
import Stats from './stats.jsx'

function UploadFile() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [videoPreviewUrl, setVideoPreviewUrl] = useState(''); // State to hold the video preview URL
    const [uploadStatus, setUploadStatus] = useState("");
    const fileInput = useRef(null);
    let [isChecked , setIsChecked] = useState(false) ;

    const [audio, setAudio] = useState(null);
    const [audio_result, setAudio_result] = useState(null);
    const [confidence, setConfidence] = useState(null);
    const [video, setVideo] = useState(null);
    const [video_result, setVideo_result] = useState(null);
    const [waveform_image, setWaveform_image] = useState(null);
    let statsRef = useRef(null) ;
    let infoRef = useRef(null) ;


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
            let formData = new FormData();
            formData.append('video', file); // Append the video file to FormData
            formData.append('useAudio', isChecked);

            axios.post("http://127.0.0.1:5000", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true,
            })
                .then((res) => {
                    console.log("Upload successful:", res);

                    if(res.data.audio){
                    setAudio(res.data.audio)
                    setAudio_result(res.data.audio_result)
                    setWaveform_image(res.data.waveform_image)

                    }

                    setVideo(res.data.video) ;
                    setVideo_result(res.data.video_result);
                    setConfidence(res.data.confidence);

                    statsRef.style.display = "block"

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

                <div id='checkbox-div'>
                    <label>
                        <input
                        type='checkbox'
                        // checked
                        onChange={()=>{ setIsChecked(!isChecked) ; }}
                        />
                        use audio for detection
                    </label>

                    <div id='info-icon-wrapper'>
                            <IoIosInformationCircleOutline

                            id='info-icon'
                             
                            onMouseEnter={()=>{
                                console.log("hi")
                                infoRef.current.classList.remove("hide");
                                infoRef.current.classList.add("show");
                            }} 
                            onMouseLeave={()=>{
                                infoRef.current.classList.remove("show");
                                infoRef.current.classList.add("hide");
                            }}
                            />
                        <div id='info-div' 
                        className='hide'
                        ref={infoRef}
                        >
Using audio for detection may result in longer processing time. Enable this option only if speech or audio content is relevant for deepfake detection.</div>
                    </div>

                </div>


                <button
                    id='upload-button'
                    // onClick={() => handleUpload(selectedFile)}
                    onClick={() => {statsRef.current.style.display = 'block';}}
                    disabled={!selectedFile}
                >
                    Upload Video
                </button>

{/*                             
    //     "audio": "base64_code",
    //     "audio_result": 2222,
    //     "waveform_image": base64code
    //     "confidence": 2222,
    //     "video": base64_code,
    //     "video_result: "REAL/FAKE", */}
    
                
            </div>

            <div 
            id="stats-div"
            ref={statsRef}
            style={{display : "none"}}
            
            >

                <Stats 
                audio={audio} 
                audio_result = {audio_result}
                waveform_image = {waveform_image}
                confidence = {confidence}
                video = {video}
                video_result = {video_result}

                ></Stats>

            {/* <div class="bg-black text-white flex items-center justify-center min-h-screen">
                <div class="grid grid-cols-2 gap-4">
                <div class="flex flex-col items-center">
                    <div class="bg-white text-black w-64 h-36 flex items-center justify-center mb-4">
                    VIDEO
                    </div>
                    <div class="bg-white text-black w-32 h-12 flex items-center justify-center rounded-full">
                    Audio
                    </div>
                </div>
                <div class="flex flex-col items-start">
                    <div class="mb-4">
                    <p>
                    Result: Real/Fake
                    </p>
                    <p>
                    Video Confidence:
                    </p>
                    <p>
                    Audio Confidence:
                    </p>
                    </div>
                    <div class="bg-white p-2">
                    <img alt="Waveform plot showing audio signal" class="w-64 h-36" height="100" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-JP73Pm0XahdeQaCjVHX88X2M.png?st=2024-09-09T18%3A18%3A01Z&amp;se=2024-09-09T20%3A18%3A01Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-08T22%3A04%3A34Z&amp;ske=2024-09-09T22%3A04%3A34Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=HJb5byEKgcBQl2Z7NL2BQvircQbIWKj5FkDMvD2zwbo%3D" width="200"/>
                    </div>
                </div>
                </div>
                 </div> */}

                            {/* {uploadStatus && <div id="upload-status">{uploadStatus}</div>} */}


            </div>

        </div>
    );
}

export default UploadFile;
