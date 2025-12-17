import { useState } from 'react'
import { UseDrag } from '../useDrag';
import React from "react";
import Whiteboard from '../Whiteboard/Whiteboard';


const WhiteboardWidget = ({ startX = 100, startY = 100, color = "dodgerblue" }) => {

  const { position, onMouseDown, onMouseMove, onMouseUp } = UseDrag(startX, startY);


  return (
    <>
    <div
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: 102,
        height: 10,
        backgroundColor: color,
        cursor: "grab",
        userSelect: "none",
      }}
    />
    <div style={{
        position: "absolute",
        left: position.x,
        top: position.y + 10,
        width: 100,
        height: 100,
      }}>
    <Whiteboard />
    </div>
    </>
        
  );

  
};

export default WhiteboardWidget;