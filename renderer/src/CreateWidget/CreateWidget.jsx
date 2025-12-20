import React, { useState } from 'react';

export const CreateWidget = () => {
   const [selectedValue, setSelectedValue] = useState('whiteboard'); // State to manage the selected value

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update state on change
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
    </div>
    </>
);
}