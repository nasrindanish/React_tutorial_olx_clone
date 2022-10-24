import React,{useEffect,useState,useContext} from 'react';
import { firebaseContext } from '../../context/firebaseContext';
import { postContext } from '../../context/postContext';


import './View.css';
function View() {

const [userdetails,setUserdetails] =useState()

const {firebase}=useContext(firebaseContext)
const {postdetails}=useContext(postContext)

useEffect(()=>{
  const {userId} =postdetails
  firebase.firestore().collection('users').where('id','==',userId) .get().then((res)=>{
    res.forEach(docs=>{
      setUserdetails(docs.data())
    })
  })
},[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postdetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postdetails.price} </p>
          <span>{postdetails.name}</span>
          <p>{postdetails.category}</p>
          <span>{postdetails.createdAt}</span>
        </div>
      {userdetails &&        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userdetails.username}</p>
          <p>{userdetails.phonenumber}</p>
        </div>
}
      </div>  
    </div>
  );
}
export default View;
