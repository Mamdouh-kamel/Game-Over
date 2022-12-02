import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

export default function SystemLayout() {
  return (
    <>
    <Navbar />
    <Outlet></Outlet>
    </>
  )
}
