import React, { useState, useEffect } from 'react';
import WhiteboardWidget from '../WhiteboardWidget/WhiteboardWidget';
import StopwatchWidget from '../StopwatchWidget/StopWatchWidget';
import DragSquare from '../dragSquare';
import { useWidgets } from '../WidgetProvider/WidgetProvider';

export const WidgetManager = () =>{
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  
    const { widgets, setWidgets } = useWidgets();
  // 🔹 LOAD widgets from disk on startup
  useEffect(() => {
    if (window.widgetsAPI) {
      window.widgetsAPI.load().then((savedWidgets) => {
        if (savedWidgets && savedWidgets.length > 0) {
          setWidgets(savedWidgets);
        } else {
          // Optional: default widgets if no save exists
          setWidgets([
            {
              id: 1,
              type: "stopwatch",
              props: { startX: 200, startY: 200, color: "grey" }
            },
            {
              id: 2,
              type: "whiteboard",
              props: { startX: 300, startY: 300, color: "grey" }
            }
          ]);
        }
      });
    }
  }, []);

  // 🔹 SAVE widgets whenever they change
  useEffect(() => {
    if (window.widgetsAPI) {
      window.widgetsAPI.save(widgets);
    }
  }, [widgets]);

  const componentMap = {
    stopwatch: StopwatchWidget,
    whiteboard: WhiteboardWidget,
  };

  const addWhiteboard = (startX = 100, startY = 100, color = "dodgerblue") => {
    setWidgets(prev => [
      ...prev,
      {
        id: Date.now(),
        type: "whiteboard",
        props: { startX, startY, color }
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
};