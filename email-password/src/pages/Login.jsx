import React, { useState } from 'react'
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const[message , setMessage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!password || !email){
      setMessage("please fill in both fields above")
      return;
    }
    if(password.length < 6){
      setMessage("Error: password length is less")
      return;
    }
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while logging in. Please try again.");
    }
  }

  return (
    <div className='container'>
       <div className='login-page'>
      <h1 style={{margin:"10px"}}>Login Page</h1>
      <form onSubmit={handleSubmit} className='login-form'>
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className='login-button'>Login</button>
      </form>
      <p style={{color:"red", padding:"2px"}}>{message}</p>
      <p>Need to Signup? <Link to="/signup">Create Account</Link></p>
      </div>
    </div>
  )
}

export default Login