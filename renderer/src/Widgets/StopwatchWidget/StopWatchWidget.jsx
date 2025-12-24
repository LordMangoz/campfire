import { useState } from 'react'
import { UseDrag } from '../../UseDrag/UseDrag';
import React from "react";
import Stopwatch from '../../Stopwatch/Stopwatch';
import UseResize from '../../useResize/useResize';
import { updateWidget } from '../UpdateWidget/UpdateWidget';

const StopwatchWidget = ({ widID = 1, startX = 100, startY = 100, color = "dodgerblue" }) => {

  const { position, onMouseDown,} = UseDrag(startX, startY);
  const { sizeX, sizeY, squareRef, startDragging } = UseResize();
  const { changePosition, deleteWidget } = updateWidget();

  return (
    <>
    <div  style={{
    
        position: "absolute",
        left: position.x,
        top: position.y,
      }}> 
    <div
      onMouseDown={onMouseDown}
      onMouseUp={() => changePosition(widID, position)}
      ref={squareRef}
      style={{
        border: "1px solid #000",
        width: sizeX,
        height: sizeY,
        backgroundColor: color,
        cursor: "grab",
        userSelect: "none",
        justifyContent: 'center',
        display: 'flex',
      }}
    > 
      <button
        onClick={() => { deleteWidget(widID); }}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 10,
          height: 10,
          background: 'black',
          border: 'none',
          cursor: 'pointer',
         
        }}
      />
    <Stopwatch />
     
    </div>
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

export default StopwatchWidget;