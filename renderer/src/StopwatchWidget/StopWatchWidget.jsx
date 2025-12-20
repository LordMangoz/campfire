import { useState } from 'react'
import { UseDrag } from '../useDrag';
import React from "react";
import Stopwatch from '../Stopwatch/Stopwatch';


const StopwatchWidget = ({ widID = 1, startX = 100, startY = 100, color = "dodgerblue" }) => {

  const { position, onMouseDown, onMouseMove, onMouseUp } = UseDrag(startX, startY);


  return (
    <>
    <div
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      style={{
        border: "1px solid #000",
        position: "absolute",
        left: position.x,
        top: position.y,
        width: 300,
        height: 105,
        backgroundColor: color,
        cursor: "grab",
        userSelect: "none",
      }}
    > <Stopwatch /></div>
   
    </>
        
  );

  
};

export default StopwatchWidget;