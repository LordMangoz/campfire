import { useState, useEffect } from "react";

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

 

  useEffect(() => {
    const handleMouseUp = () => setDragging(false);
    const handleMouseMove = (e) => {
      if (!dragging) return;
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    };

    // Attach listeners to window
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dragging, offset]);

  return {
    position,
    onMouseDown, 
  };
};