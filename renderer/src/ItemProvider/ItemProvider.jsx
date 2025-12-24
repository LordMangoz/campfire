import { createContext, useState, useContext } from "react";

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [widgets, setWidgets] = useState([]);
  const [tasks, setTasks] = useState([]);
  return (
    <ItemContext.Provider value={{ widgets, setWidgets, tasks, setTasks }}>
      {children}
    </ItemContext.Provider>
  );
};

export const UseItems = () => useContext(ItemContext);