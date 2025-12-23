import "./tasks.css";
import ListItems from "../../ListItems/ListItems.jsx";

import { useState } from "react";

//should repolace this with an acutal uid library, but am lazy rn.
const getUid = () => Date.now();

function Tasks() {
  //make state, give each item its unique id.
  const [listItems, setListItems] = useState([getUid()]);

  const handleDelete = (id) => {
    setListItems((prev) => prev.filter((key) => key !== id));
  };

  const handleChange = (id) => {
    if (listItems[listItems.length - 1] == id) {
      setListItems((prev) => [...prev, getUid()]);
    }
  };

  return (
    <div className="TodoList">
      <div className="title">Tasks</div>
      <div className="ListContainer">
        {listItems.map((key) => (
          <ListItems
            key={key}
            uid={key}
            handleChange={handleChange}
            handleDelete={handleDelete}
          ></ListItems>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
