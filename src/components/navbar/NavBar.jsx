import React from 'react'
import "./navBar.css"
import { useNavigate } from 'react-router-dom'


function NavBar() {

  const navigate = useNavigate()
  return (
    <div  className='navBar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        <img onClick={()=>{
          navigate('/profile')
        }} className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />      
    </div> 
  )
}

export default NavBar
