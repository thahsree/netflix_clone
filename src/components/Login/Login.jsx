import React , {useContext, useState } from 'react'
import { FirebaseContext } from '../../Context/FirebaseContext'
import { useNavigate } from 'react-router-dom'
import './login.css'


function Login() {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const {firebase} = useContext(FirebaseContext)
    const navigate = useNavigate()

    const handleLogin = (e) =>{
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            navigate('/')
        })
    }
  return (
    <div className='LoginMain'>
      <div className='signUpParentDiv'>
        <form onSubmit={handleLogin}>
            <label>Email</label>
            <br/>
            <input
             className='input'
             type='email'
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             id='fname'
             name='email'
             defaultValue="john"
            />
            <br />
            <label>Password</label>
            <br/>
            <input
             className='input'
             type='password'
             value={password}
             onChange={(e) => setPassword(e.target.value) }
             id='lname'
             name='password'
            />
            <br/>
            <br/>
            <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
