import React from "react";
import './usage.css';

const Usage = () => {
    return (
        <div className="custom-frame-container">
            <div className="frame-item">
                <div className="frame-video-container">
                    <video
                        autoPlay
                        loop
                        playsInline
                        className="block max-h-64 rounded-md object-cover w-full"
                        poster="https://d28dkohlqf5vwj.cloudfront.net/products/faceswap-realistic-video.png"
                        muted
                    >
                        <source src="https://d28dkohlqf5vwj.cloudfront.net/products/faceswap-realistic-video-compressed.mp4" type="video/mp4" />
                        <source src="https://d28dkohlqf5vwj.cloudfront.net/products/faceswap-realistic-video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="frame-text">
                    <h2>Create Studio Quality Deepfakes</h2>
                    <p>
                        Be whoever you want to be with our advanced deepfake technology. Create studio quality face swaps with just a few clicks using our intuitive online face swap app.
                    </p>
                    {/* <button>Create a Face Swap Video for Free</button> */}
                </div>


            </div>

            {/* second usage */}

            <div className="frame-item">
                <div className="frame-text">
                    <h2>Change Faces In Any Video
                    </h2>
                    <p>
                        Make yourself or a celebrity the star of any movie, music video, or meme. Unleash your creativity and create content that turns heads and sparks conversations
                    </p>
                </div>
                <div className="frame-video-container">
                    <img
                        src="src/Image/two.jpg" // Replace with your image URL
                        alt="Description"
                        className="frame-image"
                    />
                </div>
            </div>

            {/* third usage */}
            <div className="frame-item">
                <div className="frame-video-container">
                    <video
                        src="src/Image/three.mp4" // Replace with your video URL or file path
                        controls
                        className="frame-video"
                    />

                </div>
                <div className="frame-text">
                    <h2>Make New, Unforgettable Fun Memories</h2>
                    <p>
                        AI doesn't always have to be serious. Inject hilarity into your life by putting your friends, family, and coworkers into hilarious situations. Unleash your comedic genius.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Usage;