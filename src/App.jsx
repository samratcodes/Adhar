import { useState } from 'react'
import reactLogo from './Assets/Logo.png'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
function App() {
  return (
   <>
  <Navbar/>
 <Outlet/>
   </>
  )
}

export default App;
