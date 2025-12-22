import { UseWidgets } from "../WidgetProvider/WidgetProvider";

export const updateWidget = () => {
  const { setWidgets } = UseWidgets();

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
