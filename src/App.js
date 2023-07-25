import React from 'react';
import NavBar from './components/navbar/navBar';
import { originals ,action ,romance } from './urls';
import "./app.css"
import Banner from './components/Banner/banner';
import RowPost from './components/rowPost/rowPost';

function App() {
  return (
    <div className="App">
      < NavBar/>
      < Banner/>
      < RowPost url={originals} title='Netflix Originals' />
      < RowPost url={action} title='Action' isSmall />
      < RowPost url={romance} title='Romance' isSmall />

      
    </div>
  );
}

export default App;
