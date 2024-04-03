import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom';


const Home = () => {

const navigate=useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate("/login");
  }
  return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:'center', minHeight:'100vh'}}>
      <div>
      <h1 style={{fontSize:"40px"}}>WELCOME</h1>
      <h1 style={{fontSize:"28px"}}>React firebase authentication with Email and Password</h1>
      <button style={{marginTop:'10px', textAlign:"center", padding:"5px", background:"orangered", border:"none", fontSize:"18px", borderRadius:"5px"}} 
        onClick={handleLogout}> Logout
      </button>
      </div>
      
    </div>
  )
}

export default Home
