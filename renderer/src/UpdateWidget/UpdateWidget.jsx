import { useWidgets } from "../WidgetProvider/WidgetProvider";

export const updateWidget = () => {
  const { widgets, setWidgets } = useWidgets();

  const changePosition = (widID, position) => {
    setWidgets((prev) =>
      prev.map(
        (widgets) =>
          widgets.id === widID
            ? { ...widgets, posX: position.x, posY: position.y } // update only the matching widget
            : widgets // leave others unchanged
      )
    );
  };

  const deleteWidget = (widID) => {
    setWidgets((prev) => prev.filter((widget) => widget.id !== widID));
  };

  return {
    changePosition,
    deleteWidget,
  };
};
