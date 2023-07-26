import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import SignUp from './pages/signUp'
import Login from './pages/login'
function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route element={<Home/>} path='/' />
        </Routes>
        <Routes>
          <Route element = {<SignUp/>} path = '/signup' />
        </Routes>
        <Routes>
          <Route element ={<Login/>} path='/login' />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
