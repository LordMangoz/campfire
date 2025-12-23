import "./App.css";
import { WidgetManager } from "../WidgetManager/WidgetManager";

const App = () => {
  return (
    <div>
      <h1>
        You've Scrolled too far, <br />
        rest here
      </h1>
      <WidgetManager />
    </div>
  );
};

export default App;
