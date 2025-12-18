import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App/App.jsx"
import Sidebar from './SideBar/SideBar.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Statistics from './pages/Statistics/Statistics.jsx'
import Settings from './pages/Settings/Settings.jsx'
import Credits from './pages/Credits/Credits.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Router>
      <Sidebar/>

      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/Statistics' element={<Statistics/>}/> 
        <Route path='/Settings' element={<Settings/>}/> 
        <Route path='/Credits' element={<Credits/>}/> 

      </Routes>
    </Router>

  </StrictMode>
)
