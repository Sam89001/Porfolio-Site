// PageLoader.jsx
import React, { useState } from 'react';
import '../css/site.css';
import LoadAnimation from '../assets/Loading Animation.mp4';

const PageLoader = ({ onLoaded }) => {
  const [loaded, setLoaded] = useState(false);

  const handleVideoEnd = () => {
    setLoaded(true); 
    setTimeout(() => {
      onLoaded(); 
    }, 500); 
  };

  return (
    <div className={`page-loader ${loaded ? 'fade-out' : ''}`}>
      <video autoPlay muted className="video-container" onEnded={handleVideoEnd}>
        <source src={LoadAnimation} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default PageLoader;
