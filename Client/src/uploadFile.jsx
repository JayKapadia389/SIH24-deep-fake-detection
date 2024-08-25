import { useState , useRef } from 'react'
import './uploadFile.css'
import { FaFileUpload } from "react-icons/fa";
import axios  from 'axios';
import be_url from '../beUrl.js';

function UploadFile() {

  let fileInput = useRef() ;

  function handleDetection(){

    axios.post(be_url + "/test" , {name : "test"} , {withCredentials : true}, )
    .then((res)=>{
      console.log("res:" , res) ;
    })
    .catch((err)=>{
      console.log("err:" ,err)
    })

  }

  return (

    <div id='upload-file-wrap'>
    <div className="upload-file">
        <div id='upload-file-area' >

          <div 
          id = "upload-file-prompt"
          onClick={()=>{fileInput.current.click()}}
          >
            <FaFileUpload id='upload-file-icon'/>
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


          <div id='start-detection-checkbox-wrap'>

            <div id='check-box-div'>
              <input type='checkbox' id='audio-checkbox'/>
              <span>use audio for detection</span>
            </div>

            <button id='start-detection-btn' onClick={handleDetection}>
                Start Detection
            </button>



        </div>

    </div>
    </div>
  )
}

export default UploadFile
