import { useState , useRef } from 'react'
import './uploadFile.css'
import { FaFileUpload } from "react-icons/fa";

function UploadFile() {

  let fileInput = useRef() ;

  return (
    <div className="upload-file">
        <div id='upload-file-area' >

          <div 
          id = "upload-file-prompt"
          onClick={()=>{fileInput.current.click()}}
          >
            <FaFileUpload />
            <span>
              upload file
            </span>

            <input 
            type='file' 
            ref={fileInput} 
            id='file-input'
            ></input>
          </div>

        </div>

        <button id='start-detection-btn'>
            Start Detection
        </button>
    </div>
  )
}

export default UploadFile
