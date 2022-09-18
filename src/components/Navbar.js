import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { RiContactsFill } from 'react-icons/ri'
import { MdComputer } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'
import { FaRegistered } from 'react-icons/fa'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className='container'>
            <h1><span><MdComputer/>Luxury</span>Home</h1>
            <button className='btn'> Greetings </button>
            <ul className='nav-menu'>
            <li><span><AiFillHome/></span><a href="/home">Home</a></li>
            <li><span><RiContactsFill/></span><a href="/home">Contact</a></li>
            <li><span><HiOutlineMail/></span><a href="/home">Mail</a></li>
            <li><span><FaRegistered/></span><a href="/home">Register</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar