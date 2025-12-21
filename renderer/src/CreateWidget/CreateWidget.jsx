import React, { useState } from 'react';
import { useWidgets } from '../WidgetProvider/WidgetProvider';
export const CreateWidget = () => {
   const [selectedValue, setSelectedValue] = useState('whiteboard'); // State to manage the selected value
  const { widgets, setWidgets } = useWidgets();
  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update state on change
  };

    const addWhiteboard = (widType = "whiteboard", startX = 100, startY = 100, color = "dodgerblue") => {
    setWidgets(prev => [
      ...prev,
      {
        id: Date.now(),
        type: widType,
        posX: startX,
        posY: startY,
        color: color,
      
      }
    ]);
  };

return(

    <>
    <div className="menu">
           <label>
      Pick a widget:
      <select value={selectedValue} onChange={handleChange} name="selectedWidget">
        <option value="whiteboard">whiteboard</option>
        <option value="stopwatch">stopwatch</option>
      </select>
    </label>

    <button onClick={() => {
      // Logic to create the selected widget
      addWhiteboard(selectedValue, 200, 200, "green");
    }}>
      Create Widget
    </button>
    </div>
    </>
);
}