import React ,{useEffect,useContext} from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Create from './Pages/Create';
import View from './Pages/ViewPost';
import { firebaseContext, authContext } from './context/firebaseContext';
import Post from './context/postContext';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {

  const {setUser} =useContext(authContext)
  const {firebase} =useContext(firebaseContext)

useEffect(()=>{
      firebase.auth().onAuthStateChanged((user)=>{
          setUser(user)
          console.log(user)
      })
})

  return (
    <Post>    
      <div>
      <Router>
        <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/signup'>
        <Signup/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/create'>
        <Create/>
      </Route>
      <Route path='/view'>
        <View/>
      </Route>
      </Router>
    </div>
    </Post>

  );
}

export default App;
