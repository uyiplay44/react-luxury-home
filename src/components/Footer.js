import React from 'react'

import './footer.css'

import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {ImLinkedin} from 'react-icons/im'
import {FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
      <div className="social">
        <a href="icon"><FaTwitter className='icon' /></a>
        <a href="icon"><BsInstagram className='icon' /></a>
        <a href="icon"><BsFacebook className='icon' /></a>
        <a href="icon"><ImLinkedin className='icon' /></a>
      </div>
        <div className="container">
          <div className="col">
            <a href="/about"><h3>About</h3></a>
            <p>Company</p>
            <p>Details</p>
            <p>Planning</p>
            <p>About US</p>
          </div>
          <div className="col">
            <a href="/blogger"><h3>Blogger</h3></a>
            <p>Company</p>
            <p>Details</p>
            <p>Planning</p>
            <p>About US</p>
          </div>
          <div className="col">
            <a href="/detail"><h3>Details</h3></a>
            <p>Company</p>
            <p>Details</p>
            <p>Planning</p>
            <p>About US</p>
          </div>
          <div className="col">
            <a href="/planning"><h3>Planning</h3></a>
            <p>Company</p>
            <p>Details</p>
            <p>Planning</p>
            <p>About US</p>
          </div>
        </div>
    </div>
  )
}

export default Footer
