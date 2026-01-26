import React from 'react';
import './Preloader.css';
import logo from '../../assets/logo1.png';

const Preloader = () => {
    // Your custom font style
    const customFontStyle = {
        fontFamily: "'Neue Montreal Regular', sans-serif",
        fontWeight: 600,
        fontStyle: "normal",
        marginTop: "15px",     // Space between logo and text
        textAlign: "center",   // Centers the text
        color: "#333"          // Dark color for visibility (optional)
    };

    return (
        <div className="preloader-container">
            <img src={logo} alt="Loading..." className="preloader-image" />
            
            {/* Added class 'preloader-text' to handle animation */}
            <div style={customFontStyle} className="preloader-text">
                J.S. COLLEGE OF EDUCATION
            </div>
        </div>
    );
};

export default Preloader;