import { useState, useEffect } from "react";
import { UseItems } from "../ItemProvider/ItemProvider.jsx";

const ItemDetails = ({ uid }) => {
  const { tasks, setTasks } = UseItems();
  const [task, setTask] = useState(null);

  useEffect(() => {
    setTask(tasks.find(t => t.id === uid));
  }, [tasks, uid]);

    const changeText = (id, value) => {
    // Placeholder for future implementation
     setTasks((prev) =>
      prev.map(
        (task) =>
          task.id === id
            ? { ...task, description: value } // update only the matching task
            : task // leave others unchanged
      )
    );
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
  <>
  <div>
    {task.name}
  </div>
      <textarea
        className="DescriptionInput"
        type="text"
        placeholder="Description"
        value={task.description}
        style={{
          width: '40vw',
          maxWidth: '500px',
          height: '100px',
          resize: 'none',
        }}
        onChange={(e) => {
          changeText(uid, e.target.value);
        }}
      ></textarea>
  </>
  );
};

export default ItemDetails;