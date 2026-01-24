import React from 'react';
import './Preloader.css';
import logo from '../../assets/logo1.png';

const Preloader = () => {
    return (
        <div className="preloader-container">
            <img src={logo} alt="Loading..." className="preloader-image" />
        </div>
    );
};

export default Preloader;
