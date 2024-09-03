import React from "react";
import './title.css';

const Title = ({ onStartDetection }) => {

    return (
        <div className="titleName">
            <p className="title">DeepFake <span className="deep">Detection!</span></p>
            <p className="title-description">
                Our model's advanced deepfake video and voice detection technology quickly identifies AI-generated content, ensuring you interact with only trustworthy digital media.
            </p>
            <button className="button-70" role="button" onClick={onStartDetection}>
                Start Detection
            </button>
        </div>
    );
};

export default Title;
