from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from moviepy.editor import VideoFileClip

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

Xception_url = "https://9f63-34-125-82-46.ngrok-free.app/predict"
audio_model_url = "https://ad41-34-16-172-158.ngrok-free.app"

def extract_audio_from_video(video_path):
    """Extract audio from a video file and save it as an MP3 file."""
    audio_path = "extracted_audio.mp3"  # Save the audio as an MP3 file
    with VideoFileClip(video_path) as video:
        video.audio.write_audiofile(audio_path, codec='mp3')  # Specify the codec for MP3 format
    return audio_path

@app.route('/', methods=['POST'])
def analyze_video():
    if 'video' not in request.files or 'useAudio' not in request.form:
        return jsonify({"error": "Invalid input. Must include a video file and useAudio flag."}), 400

    video_file = request.files['video']
    use_audio = request.form.get('useAudio', 'false').lower() == 'true'

    print(video_file)
    print(use_audio)

    # Save the video file to a temporary location
    video_path = os.path.join('tmp', video_file.filename)
    video_file.save(video_path)

    # Step 1: Send video to Xception model
    with open(video_path, 'rb') as video:
        response_xception = requests.post(Xception_url, files={'video': video})
        if response_xception.status_code != 200:
            return jsonify({"error": "Error processing video with Xception model."}), 500

    # Extract information from Xception model response
    xception_data = response_xception.json()
    video_result = {
        'video': xception_data.get('video'),
        'video_result': xception_data.get('result'),
        'confidence': xception_data.get('confidence')
    }

    result = video_result

    print(result)

    # return jsonify(result)

    if use_audio:
        # Step 2: Extract audio and send to audio model
        audio_path = extract_audio_from_video(video_path)

        # return jsonify({"name" : "jay"}) , 200

        with open(audio_path, 'rb') as audio:
            response_audio = requests.post(audio_model_url, files={'audio': audio})
            if response_audio.status_code != 200:
                return jsonify({"error": "Error processing audio with audio model."}), 500
        
        # Extract information from audio model response
        audio_data = response_audio.json()
        audio_result = {
            'audio_result': audio_data.get('result'),
            'audio': audio_data.get('audio'),
            'waveform_image': audio_data.get('waveform_image')
        }

        # Combine both video and audio results
        result.update(audio_result)

        # Clean up the audio file
        # os.remove(audio_path)

    # Clean up the video file
    # os.remove(video_path)

    return jsonify(result)

if __name__ == "__main__":
    os.makedirs('tmp', exist_ok=True)  
    app.run(debug=True, host='0.0.0.0', port=5000)
