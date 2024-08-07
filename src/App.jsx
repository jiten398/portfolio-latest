import React from 'react';
// import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IframePage from './IframePage'; 

document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

const App = () => {
  return (
    < >
      <Router>
        <Routes>
          <Route path="/" element={<IframePage url="https://bisque-standards-617891.framer.app" />} />   
          <Route path="/contact" element={<IframePage url="https://bisque-standards-617891.framer.app/contact" />} />
          <Route path="/about" element={<IframePage url="https://bisque-standards-617891.framer.app/about" />} />
         <Route path="/stack" element={<IframePage url="https://bisque-standards-617891.framer.app/stack" />} />
         <Route path="/projects" element={<IframePage url="https://bisque-standards-617891.framer.app/projects" />} />
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
