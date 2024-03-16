import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Protected from './components/Protected'
import Layout from './components/Layout'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={<Protected />} >
          <Route path="/" index element={<Home />} />
       </Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />      
    </div>
  )
}

export default App
