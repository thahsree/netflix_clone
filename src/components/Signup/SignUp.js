import React ,{useState , useContext} from 'react'
import './SignUp.css'
import { FirebaseContext } from '../../Context/FirebaseContext'

function SignUp() {
 const [userName , setUserName] = useState('')
 const [email , setEmail] = useState('')
 const [mobile , setMobile] = useState('')
 const [password , setPassword] = useState('')
 const {firebase} = useContext(FirebaseContext)

 const handleSubmit = (e)=>{
  e.preventDefault()
  firebase.auth().createUserWithEmailAndPassword(email,password).then((result) =>{
    result.user.updateProfile({displayName:userName}).then(() => {
      firebase.firestore().collection('users').add({
        id:result.user.uid,
        username:userName,
        Phone:mobile
      }).then(() => {
        
      })
    })
  })
 }

  return (
   <div className='signUpMain'>
     <div className='signUpParentDiv'>
      <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <br/>
        <input 
         className='input'
         type='text'
         value={userName}
         onChange={(e) => setUserName(e.target.value)}
         id='fname'
         name='name'
         defaultValue="John"
        />
        <br/>
        <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
      </form>
    </div>
   </div>
  )
}

export default SignUp
