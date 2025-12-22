import React from 'react';
import './Popup.css';

const Popup = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-inner" onClick={e => e.stopPropagation()}>
        {children}
        <button className="popup-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;