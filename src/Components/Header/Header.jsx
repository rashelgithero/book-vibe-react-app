import React from 'react'
import { NavLink } from 'react-router'
const links = [
    <li><NavLink to='/home' className={({isActive}) => `${isActive ? "btn btn-outline btn-success text-lg": ''} text-lg`}>Home</NavLink></li>,
    <li><NavLink to='/listedBook' className={({isActive}) => `${isActive ? "btn btn-outline btn-success text-lg": ''} text-lg`}>Listed Books</NavLink></li>,
    <li><NavLink to='/pagesToRead' className={({isActive}) => `${isActive ? "btn btn-outline btn-success text-lg": ''} text-lg`}>Pages to Read</NavLink></li>
]
function Header() {
  return (
    <div className="navbar">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content rounded-box  mt-3 w-52 p-2 shadow space-y-5 bg-blue-100 z-20">
                {
                    links
                }
            </ul>
            </div>
            <a className="btn btn-ghost text-3xl font-bold px-0">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-5 text-lg font-normal">
                {
                    links
                }
            </ul>
        </div>
        <div className="navbar-end space-x-4">
            <a className="btn bg-[#23BE0A] text-white">Sign In</a>
            <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
        </div>
    </div>
  )
}

export default Header