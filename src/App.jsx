import React ,{useState} from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import './app.css'
function App() {

  const [color , setColor] = useState("")
  return (
    <div style={{background:color}}>
      
      <Router>
        <Routes>
          <Route element={<Home/>} path='/' />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
