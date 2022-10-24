import React, { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { firebaseContext } from '../../context/firebaseContext';
import { useHistory,Link } from 'react-router-dom';

export default function Signup() {

  const[username,setUsername]= useState('')
  const[email,setEmail]= useState('')
  const[phone,setPhone]= useState('')
  const[pass,setPass]= useState('')

  const history = useHistory()

  const {firebase}=useContext(firebaseContext)

  const handleSubmitt =(e)=> {
    e.preventDefault()
    console.log(username)
    firebase.auth().createUserWithEmailAndPassword(email,pass).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{firebase.firestore().collection('users').add({
        id:result.user.uid,
        username:username,
        phonenumber:phone
      }).then(()=>{history.push("/login")})
      console.log(result.user.displayName)
    })
  })
  }
  


  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='logo'></img>
        <form onSubmit={handleSubmitt}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
          />
          <br />
          <label htmlFor="uemail">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="uemail"
            name="email"
          />
          <br />
          <label htmlFor="numb">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="numb"
            name="phone"
          />
          <br />
          <label htmlFor="passw">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
            id="passw"
            name="password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to='/login'>login</Link>
      </div>
    </div>
  );
}
