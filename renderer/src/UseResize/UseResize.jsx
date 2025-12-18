import React, { useState, useRef, useCallback } from 'react';

const UseResize = () => {
  // Initial size of the square
  const [size, setSize] = useState(100);
  const squareRef = useRef(null);
 
  
  const stopDragging = useCallback(() => {
    // Remove the global event listeners when the mouse is released
    window.removeEventListener('mousemove', onDragging);
    window.removeEventListener('mouseup', stopDragging);
  }, []);

  const onDragging = useCallback((event) => {
    if (squareRef.current) {
      // Get the position of the square relative to the viewport
      const { left, top } = squareRef.current.getBoundingClientRect();
      
      // Calculate the new size based on the mouse position
      // We use Math.max to ensure a minimum size (e.g., 20px)
      const newSize = Math.max(20, event.clientX - left, event.clientY - top);
      
      setSize(newSize);
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
    size,
    squareRef, 
    startDragging,
  };
 
};

export default UseResize;