import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/Navbar/Nav'
import { CustomPage } from '../components/CustomPage/CustomPage'

function CustomPageMain() {
  return ( 
    <>
    <NavBar/>
        <CustomPage/>
    </>
     
  )
}

export default CustomPageMain