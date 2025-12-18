import React from 'react';
import { useState, useEffect } from "react";
import WhiteboardWidget from '../WhiteboardWidget/WhiteboardWidget';
import StopwatchWidget from '../StopwatchWidget/StopWatchWidget';
import DragSquare from '../dragSquare';
export const WidgetManager = () =>{

    const [widgets, setWidgets] = useState([
  {
    id: 1,
    type: "stopwatch",
    props: { startX: 100, startY: 100, color: "grey"}
  },
  {
    id: 2,
    type: "whiteboard",
    props: { startX: 50, startY: 50, color: "grey"}
  }

  
]);

const componentMap = {
  stopwatch: StopwatchWidget,
  whiteboard: WhiteboardWidget,
};

const addWhiteboard = ( startX = 100, startY = 100, color = "dodgerblue" ) => {
  setWidgets(prev => [
    ...prev,
    {
      id: Date.now(),
      type: "whiteboard",
      props: { startX: startX, startY: startY, color: color}
    }
  ]);
};
return (
  <>
    {widgets.map(({ id, type, props }) => {
      const Component = componentMap[type];
      return <Component key={id} {...props} />;
    })}


    <button onClick={() => addWhiteboard(200, 200, "grey")}>
        add whiteboard
    </button>
  </>
);
}