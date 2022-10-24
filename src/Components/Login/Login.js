import React, { useState,useContext } from 'react';
import {firebaseContext } from '../../context/firebaseContext'
import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory, Link} from 'react-router-dom'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history =useHistory()

  const {firebase}=useContext(firebaseContext)

  const handlelogin =(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{history.push('./')}).catch((error)=>{
      alert(error.message)
    })

  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt='logo'></img>
        <form onSubmit={handlelogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>signup</Link>
      </div>
    </div>
  );
}

export default Login;
