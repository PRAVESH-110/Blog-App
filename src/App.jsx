import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css'
import authService from './appwrite/auth';
import { login, logout } from "./store/authslice";
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom';

function App() {
  const[loading, setLoading]=useState(true)  
  const dispatch= useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))  //finally is used to run a function after the promise is resolved or rejected, it makes sure that the loading state is set to false after the promise is resolved or rejected
  },[])

  return ! loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'></div> 
      <Header/>
        <main>
         TODO: <Outlet/>
        </main>
      <Footer/>
    </div>
    
  ) : null
}

export default App
