import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import {Link ,useNavigate} from 'react-router-dom'
import { auth } from '../firebase';

const Signup = () => {
  const[email, setEmail]= useState( "");
  const[password, setPassword]= useState( "");

  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email,password);
      console.log(userCredentials);
      const user = userCredentials.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.getItem('token', JSON.stringify(user));
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
      <div className='container'>
        <div className='signup-page'>
         <h1>Signup page</h1>
         <form className='signup-form' onSubmit={handleSubmit}>
             <input type="email"
                 placeholder='Enter Email'
                 required
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
             />

             <input type="password"
                 placeholder='Enter Password'
                 required
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
             />
             <button type='submit'  className='signup-btn'> Signup</button>
         </form>
         <p className='par'>Already have an account? <Link to="/login">Login</Link> </p>
       </div>
      </div>
    
  )
}

export default Signup
