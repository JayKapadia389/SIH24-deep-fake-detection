import React from "react";
import './feature.css';
import ParticlesBg from "particles-bg";

const Feature = () => {
    return (
        <div className="feature">

            <h2>Feature</h2>
            <br></br>
            <ul>
                <li>
                    Utilizes advanced AI/ML algorithms to accurately detect face-swap deep fakes.
                </li>
                <li>
                    Combines spatial, temporal, audio, and frequency analysis for comprehensive detection.
                </li>
                <li>
                    Generates a detailed report on the detected abnormalities and underlying creation techniques.
                </li>
                <li>
                    Capable of analyzing videos in real-time, providing quick authentication results.
                </li>
                <li>
                    Designed to scale with large datasets and adapt to new types of deep fake technologies.
                </li>
            </ul>
        </div>
    );
}

export default Feature;