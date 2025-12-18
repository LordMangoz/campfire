import React, { useState, useRef, useCallback } from 'react';
import UseResize from '../useResize/useResize';
const ResizableSquare = () => {
  // Initial size of the square

  const { size, squareRef, startDragging } = UseResize();
  
  return (
    <div
      ref={squareRef}
      style={{
        width: size,
        height: size,
        backgroundColor: '#007bff',
        position: 'relative',
        cursor: 'default',
        // Prevents selecting text while dragging
        userSelect: 'none',
      }}
    >
      {/* The resizer handle element */}
      <div
        style={{
          position: 'absolute',
          bottom: -5,
          right: -5,
          width: 10,
          height: 10,
          backgroundColor: '#ff0000',
          cursor: 'se-resize',
        }}
        // Attach the mousedown event listener
        onMouseDown={startDragging}
      />
    </div>
  );
};

export default ResizableSquare;