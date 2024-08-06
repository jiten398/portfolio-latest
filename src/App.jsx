import React from 'react';
// import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IframePage from './IframePage'; 
const App = () => {
  return (
    < >
      <Router>
        <Routes>
          <Route path="/" element={<IframePage url="https://bisque-standards-617891.framer.app" />} />   
          <Route path="/contact" element={<IframePage url="https://bisque-standards-617891.framer.app/contact" />} />
          <Route path="/about" element={<IframePage url="https://bisque-standards-617891.framer.app/about" />} />
        </Routes>
      </Router>
    {/* <div className="iframe-container" >
      <iframe
         src="https://bisque-standards-617891.framer.app/" // Replace with your desired URL
        title="Full Screen Iframe"
        className="full-screen-iframe"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div> */}
    </>
  );
};

export default App;
