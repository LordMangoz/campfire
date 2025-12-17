import { useState } from 'react'
import { UseDrag } from '../useDrag';
import React from "react";
import Stopwatch from '../Stopwatch/Stopwatch';


const StopwatchWidget = ({ startX = 100, startY = 100, color = "dodgerblue" }) => {

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
        width: 300,
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
        width: 300,
        height: 200,
        backgroundColor: "white",
      }}>
    <Stopwatch />
    </div>
    </>
        
  );

  
};

export default StopwatchWidget;