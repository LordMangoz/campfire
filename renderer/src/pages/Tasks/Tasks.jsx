import "./tasks.css";
import ListItems from "../../ListItems/ListItems.jsx";

import { UseItems } from "../../ItemProvider/ItemProvider.jsx";
import { useState, useEffect } from "react";

//should repolace this with an acutal uid library, but am lazy rn.
const getUid = () => Date.now();

function Tasks() {
  //make state, give each item its unique id.
  const [listItems, setListItems] = useState([getUid()]);
  const { tasks, setTasks } = UseItems();

  const getLength = () => {
    return tasks.length;
  };

  // 🔹 LOAD tasks from disk on startup
  useEffect(() => {
    if (window.tasksAPI) {
      window.tasksAPI.load().then((savedTasks) => {
        if (savedTasks && savedTasks.length > 0) {
          setTasks(savedTasks);
        } else {
          //  Optional: default tasks if no save exists
          //setTasks((prev) => [...prev]);
          setTasks((prev) => {
            console.log(prev.length + "oo laaa lalaaalaaaaa");
            if (prev.length < 1) {
              return [
                {
                  id: getUid(),
                  name: "",
                  Description: "nothing",
                  completed: false,
                  deadLine: null,
                },
              ];
            } else {
              return [...prev];
            }
          });

          //setTasks([]); // or default widgets
          //handleChange(tasks[0]);
        }
      });
    }
  }, []);

  // 🔹 SAVE tasks whenever they change
  useEffect(() => {
    if (window.tasksAPI) {
      window.tasksAPI.save(tasks);
      window.tasksAPI.load().then((savedTasks) => {
        console.log(savedTasks);
      });
    }
  }, [tasks]);

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleChange = (id) => {
    //setTasks((prev) => [...prev, getUid()]);
    if (tasks[tasks.length - 1].id == id) {
      setTasks((prev) => [
        ...prev,
        {
          id: getUid(),
          name: "",
          Description: "nothing",
          completed: false,
          deadLine: null,
        },
      ]);
    }
  };

  return (
    <div className="TodoList">
      <div className="title">Tasks</div>
      <div className="ListContainer">
        {tasks.map((task) => (
          <ListItems
            key={task.id}
            uid={task.id}
            handleChange={handleChange}
            handleDelete={handleDelete}
            name ={task.name}
          ></ListItems>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
