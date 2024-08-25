import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <video className="video-bg" autoPlay loop muted>
      <source src="/public/bg-video.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
    <App />
  </React.StrictMode>,
)
