import React from 'react'
import Image from 'next/image'
import R1 from './Results-img/R1.jpg'
import R2 from './Results-img/R2.jpg'
import R3 from './Results-img/R3.jpg'
import R4 from './Results-img/R4.jpg'
import R5 from './Results-img/R5.jpg'
import R6 from './Results-img/R6.jpg'
import About from '../about/page'
import Gallery from '../gallery/page'

const Results = () => {
  return (
    <>
    <h2 className='p-5 text-center'>Skin Care Before And After Face Results</h2>
      <div className="container" id='gallery-area'>
        <div className="row">
          <div className="col-12 col-md-6 "> <Image src={R1} alt='Gallery img' /> </div>
          <div className="col-12 col-md-6 "> <Image src={R2} alt='Gallery img' /> </div>
          <div className="col-12 col-md-6 "> <Image src={R3} alt='Gallery img' /> </div>
          <div className="col-12 col-md-6 "> <Image src={R4} alt='Gallery img' /> </div>
          <div className="col-12 col-md-6 "> <Image src={R5} alt='Gallery img' /> </div>
          <div className="col-12 col-md-6 "> <Image src={R6} alt='Gallery img' /> </div>
        </div>
      </div>
    </>
  )
}

export default Results