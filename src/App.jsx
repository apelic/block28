import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from "react-router-dom";
import Red from './Red';
import Blue from './Blue';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
      <h1></h1>
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue/>}/>
          <Route path="/red" element={<Red/>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
