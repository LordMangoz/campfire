import { createContext, useState, useContext } from 'react';

const WidgetContext = createContext();

export const WidgetProvider = ({ children }) => {
  const [widgets, setWidgets] = useState([]);
  return (
    <WidgetContext.Provider value={{ widgets, setWidgets }}>
      {children}
    </WidgetContext.Provider>
  );
};

export const useWidgets = () => useContext(WidgetContext);