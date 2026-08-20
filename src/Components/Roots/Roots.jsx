import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'
import Home from '../Home/Home'

function Roots() {
  return (
    <div className='container mx-auto'>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}

export default Roots