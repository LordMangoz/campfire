import { useState } from 'react'
import './App.css'
import DragSquare from '../dragSquare'
import WhiteboardWidget from '../WhiteboardWidget/WhiteboardWidget'
import StopwatchWidget from '../StopwatchWidget/StopWatchWidget'
import ResizableSquare from '../ResizableSquare/ResizableSquare'
import { WidgetManager } from '../WidgetManager/WidgetManager'

const App = () => {
  return (
    <div>
      <h1>You've Scrolled too far, <br/>rest here</h1>
    </div>
  )
}

export default App
