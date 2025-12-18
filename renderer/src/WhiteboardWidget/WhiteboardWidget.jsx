import { useState } from 'react'
import { UseDrag } from '../useDrag';
import React from "react";
import Whiteboard from '../Whiteboard/Whiteboard';
import UseResize from '../useResize/useResize';


const WhiteboardWidget = ({ startX = 100, startY = 100, color = "dodgerblue" }) => {

  const { position, onMouseDown, onMouseMove, onMouseUp } = UseDrag(startX, startY);
  const { size, squareRef, startDragging } = UseResize();


  return (
    <>
    <div
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
       ref={squareRef}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: size + 2,
        height: 10,
        backgroundColor: color,
        cursor: "grab",
        userSelect: "none",
      }}
    />
    <div 
     ref={squareRef}
    style={{
        position: "absolute",
        left: position.x,
        top: position.y + 10,
        width: size,
        height: size,
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