import { useState, useRef, useEffect } from 'react';
import './stats.css'

function Stats(props){

    return (
        <div className="grid grid-cols-2 gap-4">
          <div 
          id='left'
          className="flex flex-col items-center">
            <div 
            id="result-video-div" 
            className="bg-white text-black w-90 h-10 flex items-center justify-center">

            {
            props.video && 
            <video id='result-video' autoPlay loop muted>
                    <source 
                    src={`data:video/mp4;base64,${props.video}`}
                    // src={"/shahrukh.mp4"}
                 type="video/mp4" />
                    Your browser does not support the video tag.
                </video>}
              {/* VIDEO */}
            </div>
            <div className="bg-white text-black w-80 h-12 flex items-center justify-center rounded-full">
            {
            props.audio && 
            <audio 
            id='result-audio-div'
            controls>
                    <source 
                    src={`data:audio/mp3;base64,${props.audio}`} 
                    // src={"/extracted_audio.mp3"}

                    type="audio/mp3" /> {/* Adjust MIME type if needed */}
                    Your browser does not support the audio tag.
                </audio>}
            </div>
          </div>
          <div id="right" className="flex flex-col items-start ">
            <div 
            className="mb-3"
            >
              <p>Result: {props.video_result}</p>
              <p>Video Confidence: {props.confidence}</p>
              <p>Audio Confidence: {props.audio_result}</p>
            </div>
            <div className="bg-white p-2"
            id="waveform-img-div"
            
            >
            {
            props.waveform_image && 
            <img 
            src={`data:image/png;base64,${props.waveform_image}`}
            // src={"/wfimg.jpg"}
            alt="Waveform" />}
            </div>
          </div>
        </div>
    )
}

export default Stats ;