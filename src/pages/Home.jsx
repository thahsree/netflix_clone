import React from 'react';
import Banner from '../../src/components/Banner/banner';
import { action, originals, romance } from '../../src/urls';
import NavBar from '../components/navbar/NavBar';
import RowPost from '../components/rowPost/rowPost';


function Home() {
  return (
    <div>
      < NavBar/>
      < Banner/>
      < RowPost url={originals} title='Netflix Originals' />
      < RowPost url={action} title='Action' isSmall />
      < RowPost url={romance} title='Romance' isSmall />
    </div>
  )
}

export default Home
