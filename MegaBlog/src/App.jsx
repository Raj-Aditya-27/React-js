import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

function App() {

  const [loading, setloading] = useState(true)
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setloading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
