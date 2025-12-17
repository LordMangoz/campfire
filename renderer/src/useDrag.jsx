import { useState } from 'react'
import React from "react";

export const UseDrag = (startX = 0, startY = 0) => {
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

  return {
    position,
    onMouseDown,
    onMouseMove,
    onMouseUp,
  };
};