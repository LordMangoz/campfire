import React, { useState, useEffect } from "react";
import WhiteboardWidget from "../WhiteboardWidget/WhiteboardWidget";
import StopwatchWidget from "../StopwatchWidget/StopWatchWidget";
import DragSquare from "../../dragSquare";
import { UseItems } from "../../ItemProvider/ItemProvider";
import Popup from "../../Popup/Popup";
import { CreateWidget } from "../../CreateWidget/CreateWidget";
import TimerWidget from "../TimerWidget/TimerWidget";

export const WidgetManager = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const { widgets, setWidgets } = UseItems();
  // 🔹 LOAD widgets from disk on startup
  useEffect(() => {
    if (window.widgetsAPI) {
      window.widgetsAPI.load().then((savedWidgets) => {
        if (savedWidgets && savedWidgets.length > 0) {
          setWidgets(savedWidgets);
        } else {
          //  Optional: default widgets if no save exists
          console.log(savedWidgets);
          setWidgets((prev) => [...prev]);

          // setWidgets([]); // or default widgets
        }
      });
    }
  }, []);

  // 🔹 SAVE widgets whenever they change
  useEffect(() => {
    if (window.widgetsAPI) {
      window.widgetsAPI.save(widgets);
      window.widgetsAPI.load().then((savedWidgets) => {
        console.log(savedWidgets);
      });
    }
  }, [widgets]);

  const componentMap = {
    stopwatch: StopwatchWidget,
    whiteboard: WhiteboardWidget,
    timer: TimerWidget,
  };

  return (
    <>
      {widgets.map(({ id, type, posX, posY, color }) => {
        const Component = componentMap[type];
        return (
          <Component
            key={id}
            widID={id}
            startX={posX}
            startY={posY}
            color={color}
          />
        );
      })}

      <button onClick={togglePopup}>add whiteboard</button>

      <Popup show={isPopupOpen} onClose={togglePopup}>
        <CreateWidget />
      </Popup>
    </>
  );
};
