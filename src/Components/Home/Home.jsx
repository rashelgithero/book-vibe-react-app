import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'
import Banner from '../Banner/Banner'
import Books from '../Books/Books'

function Home() {
  return (
    <div className='space-y-24'>
        <Banner></Banner>
        <Books></Books>
    </div>
  )
}

export default Home