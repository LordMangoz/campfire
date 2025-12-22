import React, { useState } from "react";
import { UseWidgets } from "../WidgetProvider/WidgetProvider";
export const CreateWidget = () => {
  const [selectedValue, setSelectedValue] = useState("whiteboard"); // State to manage the selected value
  const { widgets, setWidgets } = UseWidgets();
  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update state on change
  };

  const addWidget = (
    widType = "whiteboard",
    startX = 100,
    startY = 100,
    color = "dodgerblue"
  ) => {
    setWidgets((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: widType,
        posX: startX,
        posY: startY,
        color: color,
      },
    ]);
  };

  return (
    <>
      <div className="menu">
        <label>
          Pick a widget:
          <select
            value={selectedValue}
            onChange={handleChange}
            name="selectedWidget"
          >
            <option value="whiteboard">whiteboard</option>
            <option value="stopwatch">stopwatch</option>
            <option value="timer">timer</option>
          </select>
        </label>

        <button
          onClick={() => {
            // Logic to create the selected widget
            addWidget(selectedValue, 200, 200, "green");
          }}
        >
          Create Widget
        </button>
      </div>
    </>
  );
};
