// App.jsx
import React, { useState, useEffect } from 'react';
import './css/index.css';
import PageLoader from './components/PageLoader.jsx';
import PopoutNavbar from './components/PopoutNavbar.jsx';
import Popup from './components/Popup.jsx';
import Header from './components/Header.jsx';
import SplashPage from './components/SplashPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import Padding from './components/Padding.jsx';
import SplashPagePadding from './components/SplashPagePadding.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to handle the loading based on screen size
    const handleLoading = () => {
      if (window.innerWidth > 1070) { // Adjust the breakpoint value as needed
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3500);
        
        return () => clearTimeout(timer);
      } else {
        setLoading(false);
      }
    };

    // Initial loading check
    handleLoading();
    
    // Optional: Handle resizing if you want to dynamically check on resize
    window.addEventListener('resize', handleLoading);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleLoading);
    };
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading && <PageLoader onLoaded={handleLoadingComplete} />}
      {!loading && (
        <>
          <PopoutNavbar />
          <Popup />
          <Header />
          <SplashPage />
          <SplashPagePadding />
          <AboutPage />
          <Padding />
          <ProjectsPage />
          <ContactPage />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

