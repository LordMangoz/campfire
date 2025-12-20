import React, { useState, useEffect } from 'react';
import { UseDrag } from '../useDrag';
import Whiteboard from '../Whiteboard/Whiteboard';
import UseResize from '../useResize/useResize';
import { useWidgets } from '../WidgetProvider/WidgetProvider';

const WhiteboardWidget = ({ widID = 1, startX = 100, startY = 100, color = "dodgerblue" }) => {

  const { position, onMouseDown, onMouseMove, onMouseUp } = UseDrag(startX, startY);
  const { size, squareRef, startDragging } = UseResize();
 const { widgets, setWidgets } = useWidgets();

    
const updateWidget = () => { 
    setWidgets(prev => 
        prev.map(widgets => 
            widgets.id === widID 
            ? { ...widgets, posX: position.x, posY: position.y } // update only the matching widget 
            : widgets // leave others unchanged 
            ) ); };
  return (
    <>
    <div
        onMouseDown={onMouseDown}
      onMouseUp={updateWidget}
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