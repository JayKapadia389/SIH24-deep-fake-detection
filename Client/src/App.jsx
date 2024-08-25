import { useState } from 'react'
import './App.css'
import Footer from './footer';
import Navbar from './navbar'
import UploadFile from './uploadFile'
import Usage from './usage'

function App() {

  return (

    <div className="App">

      <div id="nav-main-wrap">
          <Navbar></Navbar>
          
          <main id='main-section'>

            <div id='demo-uploadfile-wrap'>

              <div id='demo-div'>
                <h1>
                Uncover the truth—detect deepfakes instantly with our AI-powered video analysis tool.
                </h1>
                <img src='/public/demo.jpg'></img>
              </div>

              <UploadFile></UploadFile>
            </div>

          </main>

          
      </div>

      <Usage></Usage>

      <Footer/>

      </div>

  )
}

export default App
