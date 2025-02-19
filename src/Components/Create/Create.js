import React, { Fragment,useContext,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { firebaseContext,authContext} from '../../context/firebaseContext'
import { useHistory } from 'react-router-dom';

const Create = () => {

  const [name,setName] =useState('')
  const [category,setCategory] =useState('')
  const [price,setPrice] =useState('')
  const [image,setImage] =useState(null)

  const { firebase}=useContext(firebaseContext)
  const {user} =useContext(authContext)

  const history =useHistory()

  const date =new Date()

  const handlesubmit=()=>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url)
        firebase.firestore().collection('product').add({
            name,
            category,
            price,
            url,
            userId :user.uid,
            createdAt : date.toDateString()
        })
        history.push('/')
      })
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
            />
            <br />
            <label htmlFor="categ">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="categ"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="prize">Price</label>
            <br />
            <input className="input" type="number"
            value={price}
            onChange={(e)=>setPrice(e.target.value)} id="prize" name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>

            <br />
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" />
            <br />
            <button onClick={handlesubmit}  className="uploadBtn">upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
