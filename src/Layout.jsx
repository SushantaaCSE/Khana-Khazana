import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function Layout() {
  return (
    <>
    <header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default  Layout