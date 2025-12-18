import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from  '../../public/vite.svg'
import './App.css'
import DragSquare from '../dragSquare'
import WhiteboardWidget from '../WhiteboardWidget/WhiteboardWidget'
import StopwatchWidget from '../StopwatchWidget/StopWatchWidget'
import ResizableSquare from '../ResizableSquare/ResizableSquare'
import { WidgetManager } from '../WidgetManager/WidgetManager'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      
     
      {/* <WhiteboardWidget startX={50} startY={50} color="grey"/>
      <StopwatchWidget startX={100} startY={100} color="grey"/>
      <ResizableSquare /> */}
      <WidgetManager />

    </>
  )
}

export default App
