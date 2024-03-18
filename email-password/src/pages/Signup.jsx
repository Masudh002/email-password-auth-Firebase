import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import {Link ,useNavigate} from 'react-router-dom'
import { auth } from '../firebase';

const Signup = () => {
  const[email, setEmail]= useState( "");
  const[password, setPassword]= useState( "");
  const [message, setMessage]= useState(null);

  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if( !password || !email){
      setMessage("please fill in both fields above");
      return;
    }
    if( password.length < 6){
      setMessage("Please input atleast 6 characters password")
      return;
    }
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email,password);
      console.log(userCredentials);
      const user = userCredentials.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.getItem('token', JSON.stringify(user));
      navigate("/login");
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while logging in. Please try again.")
    }
  }

  return (
      <div className='container'>
        <div className='signup-page'>
         <h1>Signup page</h1>       
          {message? (<p style={{ background:"pink", padding:'12px', margin:'4px', fontWeight:'bold', borderRadius:'5px'}}>
              We Couldn't create your account  <br /> Please check your responses and try again </p>):("")
           }
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
         <p style={{color:"red", padding:"2px"}}>{message}</p>
         <p className='par'>Already have an account? <Link to="/login">Login</Link> </p>
       </div>
      </div>
    
  )
}

export default Signup
