import { useRef, useState, useEffect } from "react";

const Whiteboard = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  // Track last mouse position
  const lastPos = useRef({ x: 0, y: 0 });

const getMousePos = (e) => {
  const canvas = canvasRef.current;
  const rect = canvas.getBoundingClientRect();

  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  return {
    x: (e.clientX - rect.left) * scaleX,
    y: (e.clientY - rect.top) * scaleY,
  };
};

  const startDrawing = (e) => {
   setDrawing(true);
    lastPos.current = getMousePos(e);
  };

  const draw = (e) => {
    if (!drawing) return;

  const ctx = canvasRef.current.getContext("2d");
  const { x, y } = getMousePos(e);

  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";

  ctx.beginPath();
  ctx.moveTo(lastPos.current.x, lastPos.current.y);
  ctx.lineTo(x, y);
  ctx.stroke();

  lastPos.current = { x, y };
  };

  const stopDrawing = () => setDrawing(false);

  // Optional: resize canvas to fit parent
  useEffect(() => {
     const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

const resizeCanvas = () => {
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  ctx.setTransform(1, 0, 0, 1, 0, 0); // reset
};

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  return () => window.removeEventListener("resize", resizeCanvas);
}, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ border: "1px solid #000", width: "100%", height: "100%", cursor: "crosshair" }}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
    />
  );
};

export default Whiteboard;