
import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import UploadFile from "./uploadFile";

const Navbar = ({ onStartDetection }) => {

    return (

        <section className="navbar-look">
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/"
                        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <svg className="bi me-2" width="40" height="32">
                            <use xlinkHref="#bootstrap"></use>
                        </svg>
                        <div class="animated-text">
                            Deepfake Detector
                        </div>
                    </a>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a href="#" className="link nav-link" aria-current="page">Home</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="link nav-link"  >Documentation</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="link nav-link" onClick={onStartDetection} >Detection</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="link nav-link" >About</a>
                        </li>
                    </ul>
                </header>
            </div>
        </section>

    );
}

export default Navbar;
