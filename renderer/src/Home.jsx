import { useState } from 'react'
import React from "react";


const Homes = ({ startX = 100, startY = 100, color = "dodgerblue" }) => {
   const [position, setPosition] = useState({ x: startX, y: startY });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const onMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const onMouseUp = () => setDragging(false);

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
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

export default Homes;