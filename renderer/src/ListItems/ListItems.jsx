import "./ListItems.css";
import { useState } from "react";
import { UseItems } from "../ItemProvider/ItemProvider.jsx";
export default function ListItems({ uid, handleChange, handleDelete, name}) {
  const [checked, setChecked] = useState(false);
const { tasks, setTasks } = UseItems();
  const onCheckboxChanged = (e) => {
    setChecked(e.target.checked);
  };

  const changeText = (id, value) => {
    // Placeholder for future implementation
     setTasks((prev) =>
      prev.map(
        (task) =>
          task.id === id
            ? { ...task, name: value } // update only the matching task
            : task // leave others unchanged
      )
    );
  };

  return (
    <div className={`ListItems ${checked ? "Checked" : ""}`}>
      <input
        className="ListItemCheckbox"
        type="checkbox"
        checked={checked}
        onChange={onCheckboxChanged}
      ></input>
      <input
        className="ListItemBody"
        type="text"
        placeholder="What are we doing today?"
        value={name}
        onChange={(e) => {
          handleChange(uid, e.target.value);
          changeText(uid, e.target.value);
        }}
      ></input>
      <button
        className="DeleteButton material-icons"
        onClick={() => handleDelete(uid)}
      >
        close
      </button>
    </div>
  );
}
