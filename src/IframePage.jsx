import React from 'react';
// import { useParams } from 'react-router-dom';
import './App.css'; // Import CSS for iframe styling

const IframePage = ({ url }) => {
  return (
    <div className="iframe-container">
      <iframe
        src={url}
        title="Iframe"
        className="full-screen-iframe"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default IframePage;
