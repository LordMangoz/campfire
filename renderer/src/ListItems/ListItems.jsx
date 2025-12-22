import "./ListItems.css";
import { useState } from "react";

export default function ListItems({ uid, handleChange, handleDelete }) {
  const [checked, setChecked] = useState(false);

  const onCheckboxChanged = (e) => {
    setChecked(e.target.checked);
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
        onChange={(e) => handleChange(uid, e.target.value)}
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
