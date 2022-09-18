import React from 'react'
import { BsSearch } from 'react-icons/bs';
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
        <h2>Find it. Tour it. Own it.</h2>
            <p>Use the search engine to find a luxury home for your family.</p>
            <form className='search'>
                <div>
                    <input type="text"  placeholder='Enter Address, Neighborhood, City, or ZIP Code'/>
                </div>
                <button type='text' className='btn'><span><BsSearch/></span></button>
            </form>
        </div>
    </div>
  )
}

export default Hero
