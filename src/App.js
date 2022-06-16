import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/navbar/Navbar.jsx'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
    </Router>
    </>
    
  );
}

export default App;
