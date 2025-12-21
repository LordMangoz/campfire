import React, { useState, useEffect } from 'react';
import { UseDrag } from '../UseDrag/UseDrag';
import Whiteboard from '../Whiteboard/Whiteboard';
import UseResize from '../useResize/useResize';

import { updateWidget } from '../UpdateWidget/UpdateWidget';

const WhiteboardWidget = ({ widID = 1, startX = 100, startY = 100, color = "dodgerblue" }) => {

  const { position, onMouseDown, onMouseMove, onMouseUp } = UseDrag(startX, startY);
  const { size, squareRef, startDragging } = UseResize();
  const { changePosition, deleteWidget } = updateWidget();
    

  return (
    <>
    <div
        onMouseDown={onMouseDown}
        onMouseUp={() => changePosition(widID, position)}
        ref={squareRef}
        style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: size,
        height: 10,
        backgroundColor: color,
        cursor: "grab",
        userSelect: "none",
        justifyContent: 'right',
        display: 'flex',
      }}
    >
      <button
        onClick={() => { deleteWidget(widID); }}
        style={{
          display: 'block',
          width: 10,
          height: 10,
          background: 'black',
          border: 'none',
          cursor: 'pointer',
        }}
      />
       
      

    </div>
    <div 
     ref={squareRef}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y + 10,
        width: size,
        height: size,
        backgroundColor: "white",
      }}>
    <Whiteboard />
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
    </>
        
  );

  
};

export default WhiteboardWidget;