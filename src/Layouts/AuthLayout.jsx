import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

export default function AuthLayout() {
  return (
    <>
    <Navbar auth={true} />
    <div className="m-auto mt-4">
        <Outlet></Outlet>
    </div>
    
    </>
  )
}
