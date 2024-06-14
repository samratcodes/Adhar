import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashbioard = () => {
  return (
    <div>
      <div>
        Dashboard
      </div>
      <Outlet/>
    </div>
  )
}

export default Dashbioard
