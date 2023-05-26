import Appbar from '../components/Appbar/Appbar'
import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer/Footer'
const MainRoot = () => {
  return (
    <>
    <Appbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainRoot