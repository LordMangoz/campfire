import React, { useState, useRef, useCallback } from 'react';

const UseResize = (minSizeX = 100, minSizeY = 100) => {
  // Initial size of the square
  const [sizeX, setSizeX] = useState(minSizeX);
  const [sizeY, setSizeY] = useState(minSizeY);
  const squareRef = useRef(null);
 
  
  const stopDragging = useCallback(() => {
    // Remove the global event listeners when the mouse is released
    window.removeEventListener('mousemove', onDragging);
    window.removeEventListener('mouseup', stopDragging);
  }, []);

  const onDragging = useCallback((event) => {
    if (squareRef.current) {
      // Get the position of the square relative to the viewport
      const { left, top, right, bottom } = squareRef.current.getBoundingClientRect();
      
      // Calculate the new size based on the mouse position
      // We use Math.max to ensure a minimum size (e.g., 20px)
      const newSizeX = Math.max(minSizeX, event.clientX - left, event.clientY - bottom);
      const newSizeY = Math.max(minSizeY, event.clientX - right, event.clientY - top);
      setSizeX(newSizeX);
      setSizeY(newSizeY);
    }
  }, []);

  const startDragging = useCallback((event) => {
    // Prevent default browser drag behavior
    event.preventDefault(); 
    // Add global event listeners for dragging and stopping
    window.addEventListener('mousemove', onDragging);
    window.addEventListener('mouseup', stopDragging);
  }, [onDragging, stopDragging]);
 return {
    sizeX,
    sizeY,
    squareRef, 
    startDragging,
  };
 
};

export default UseResize;