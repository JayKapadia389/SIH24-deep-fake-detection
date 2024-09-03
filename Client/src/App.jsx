import { useState } from 'react';
import './App.css';
import Footer from './footer';
import Navbar from './navbar';
import UploadFile from './uploadFile';
import Usage from './usage';
import Feature from './feature';
import ParticlesBg from 'particles-bg';
import Title from './title';

function App() {
  const [showUpload, setShowUpload] = useState(false);

  const handleStartDetection = () => {
    setShowUpload(true);
    document.getElementById("upload-file-wrap").scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <div className="App">


      <div id="nav-main-wrap">
        <Navbar onStartDetection={handleStartDetection} />

        <main id='main-section'>
          <div id='demo-uploadfile-wrap'>
            <Title onStartDetection={handleStartDetection} />
            <img src='/liveness.png' alt="Liveness Detection" />
          </div>
        </main>
      </div>
      {showUpload && <UploadFile />}

      <Usage />
      <Feature />
      <Footer />
    </div>
  );
}

export default App;
