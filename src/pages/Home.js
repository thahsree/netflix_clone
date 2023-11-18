import React from 'react'
import NavBar from '../components/navbar/NavBar';
import { originals ,action ,romance } from '../../src/urls';
import Banner from '../../src/components/Banner/banner';
import RowPost from '../../src/components/rowPost/rowPost';


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
