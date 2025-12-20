import React from 'react';
import './Popup.css'; 

const Popup = ({ showPopUp, closePopUp, children }) => {
  if (!showPopUp) {
    return null; // Don't render anything if showPopUp is false
  }

  // Prevents closing the modal when clicking inside the content area
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    // The overlay/backdrop that closes the modal when clicked
    <div className="popup-overlay" onClick={closePopUp}>
      {/* The modal content container */}
      <div className="popup-content" onClick={handleContentClick}>
        <button className="popup-close-btn" onClick={closePopUp}>
          &times; {/* A simple 'X' close button */}
        </button>
        {children} {/* Renders content passed from the parent component */}
      </div>
    </div>
  );
};

export default Popup;