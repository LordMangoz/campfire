import { useState } from 'react'
import { UseDrag } from './useDrag';
import React from "react";



const DragSquare = ({ startX = 100, startY = 100, color = "dodgerblue" }) => {

  const { position, onMouseDown, onMouseMove, onMouseUp } = UseDrag(startX, startY);


  return (
    <div
      onMouseDown={onMouseDown}
 
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: 100,
        height: 100,
        backgroundColor: color,
        cursor: "grab",
        userSelect: "none",
      }}
    />
   
        
  );

  
};

export default DragSquare;