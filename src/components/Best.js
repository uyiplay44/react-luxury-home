import React from 'react'
import './Best.css'

import photo1 from '../asset/photo1.jpg'
import photo2 from '../asset/photo2.jpg'
import photo3 from '../asset/photo3.jpg'
import photo4 from '../asset/photo4.jpg'


const Best = () => {
  return (
    <div className='best'>
      <h1>Find the best properities</h1>
      <div>
        <p><span className='bold'>All</span></p>
        <p>Commerical</p>
        <p>Residential</p>
        <p>Agricultural</p>
      </div>
      <div className="container-frame">
        <img src= {photo1} alt='' />
        <img src= {photo2} alt='' />
        <img src= {photo3} alt='' />
        <img src= {photo4} alt='' />
      </div>
      <button className='btn btn-btn'>View All</button>
    </div>
  )
}

export default Best
