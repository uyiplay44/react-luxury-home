import React from 'react'

import './feature.css'




// import React from 'react'

import photo11 from '../asset/photo11.jpg'
import photo12 from '../asset/photo12.jpg'
import photo13 from '../asset/photo13.jpg'
import photo14 from '../asset/photo14.jpg'
import photo15 from '../asset/photo15.jpg'

import photo10 from '../asset/photo10.jpg'
import photo6 from '../asset/photo6.jpg'
import photo7 from '../asset/photo7.jpg'
import photo8 from '../asset/photo8.jpg'
import photo9 from '../asset/photo9.jpg'

const Feature = () => {
  return (
    <div className='featured'>
    <div className="title">
      <h1>Top Featured Listing</h1>
      <p>Selected listings by City, State & Zip base on views.</p>
    </div>
    <div className="featured-wrapper">
      <div className="main">
      <img src={photo11} alt='' />
      <h2>123 Acme St, Dallas, TX</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minima fuga iste nulla modi aut. Assumenda excepturi enim laudantium sint?</p>
      <p className='price '>$2,677,000</p>
      <button className='btn btn-btn-btn-1'>View Map</button>
      </div>
      <div>
      <img src={photo12} alt='' />
      <h3>123 Acme St, Dallas, TX</h3>
      <p>House for Sale</p>
      <p className='price '>$2,677,000</p>
      </div>
      <div>
      <img src={photo13} alt='' />
      <h3>123 Acme St, Dallas, TX</h3>
      <p>House for Sale</p>
      <p className='price '>$2,677,000</p>
      </div>
      <div>
      <img src={photo14} alt='' />
      <h3>123 Acme St, Dallas, TX</h3>
      <p>House for Sale</p>
      <p className='price '>$2,677,000</p>
      </div>
      <div>
      <img src={photo15} alt='' />
      <h3>123 Acme St, Dallas, TX</h3>
      <p>House for Sale</p>
      <p className='price '>$2,677,000</p>
      </div>
    </div>
    {/* {Second section} */}

    <div className="featured-link">
      <div>
      <img className='image' src={photo10} alt='' />
      <h3>123 Acme St, Dallas, TX</h3>
      <p>House for Sale</p>
      <p className='tag-price '>$2,677,000</p>
      {/* <button className='btn btn-btn-btn'>View Map</button> */}
      </div>
      <div>
      <img src={photo6} alt='' />
      <h3>123 Acme St, Dallas, TX</h3>
      <p>House for Sale</p>
      <p className='tag-price '>$2,677,000</p>
      </div>
      <div className="main-container">
      <img src={photo7} alt='' />
      <h2>123 Acme St, Dallas, TX</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minima fuga iste nulla modi aut. Assumenda excepturi enim laudantium sint?</p>
      <p className='tag-price '>$2,677,000</p>
      <button className='btn btn-btn-btn-2'>View Map</button>
      </div>
      <div>
      <img src={photo8} alt='' />
      <h3>123 Acme St, Dallas, TX</h3>
      <p>House for Sale</p>
      <p className='tag-price '>$2,677,000</p>
      </div>
      <div>
      <img src={photo9} alt='' />
      <h3>123 Acme St, Dallas, TX</h3>
      <p>House for Sale</p>
      <p className='tag-price '>$2,677,000</p>
      </div>
    </div>
  </div>
  
  )
}

export default Feature