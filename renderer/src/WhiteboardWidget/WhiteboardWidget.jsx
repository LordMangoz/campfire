import React, { useState, useEffect } from "react";
import { UseDrag } from "../UseDrag/UseDrag";
import Whiteboard from "../Whiteboard/Whiteboard";
import UseResize from "../useResize/useResize";

import { updateWidget } from "../UpdateWidget/UpdateWidget";

const WhiteboardWidget = ({
  widID = 1,
  startX = 100,
  startY = 100,
  color = "dodgerblue",
}) => {
  const { position, setPosition, onMouseDown, onMouseMove, onMouseUp } =
    UseDrag(startX, startY);
  const { sizeX, setSizeX, sizeY, setSizeY, squareRef, startDragging } =
    UseResize();
  const { changePosition, deleteWidget } = updateWidget();
  const [isFullScreen, setFullScreen] = useState(false);
  const fullScreen = () => {
    if (!isFullScreen) {
      setSizeX("80vw");
      setSizeY("80vh");
      setPosition({ x: 0, y: 0 });
      setFullScreen(true);
    } else {
      setSizeX(100);
      setSizeY(100);
      setPosition({ x: 200, y: 200 });
      setFullScreen(false);
    }
  };

  return (
    <>
      <div
        onMouseDown={onMouseDown}
        onMouseUp={() => changePosition(widID, position)}
        ref={squareRef}
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          width: sizeX,
          height: 10,
          backgroundColor: color,
          cursor: "grab",
          userSelect: "none",
          justifyContent: "right",
          display: "flex",
        }}
      >
        <button
          onClick={() => {
            deleteWidget(widID);
          }}
          style={{
            display: "block",
            width: 10,
            height: 10,
            background: "black",
            border: "none",
            cursor: "pointer",
          }}
        />
      </div>
      <div
        ref={squareRef}
        style={{
          position: "absolute",
          left: position.x,
          top: position.y + 10,
          width: sizeX,
          height: sizeY,
          backgroundColor: "white",
        }}
      >
        <button
          onClick={fullScreen}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 10,
            height: 10,
            background: "blue",
            border: "none",
            cursor: "pointer",
          }}
        />
        <Whiteboard />
        <div
          style={{
            position: "absolute",
            bottom: -5,
            right: -5,
            width: 10,
            height: 10,
            backgroundColor: "#ff0000",
            cursor: "se-resize",
          }}
          // Attach the mousedown event listener
          onMouseDown={startDragging}
        />
      </div>
    </>
  );
};

export default WhiteboardWidget;
