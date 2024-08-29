import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {




  return (
    <>
    
    <Navbar></Navbar>
    
   <div className=" container w-80">
    
    <Outlet></Outlet>
    </div>
    <Footer/>
    
    
    
    </>
  )
}
