import Image from 'next/image'
import React from 'react'
import G1 from './Gallery-img/G1.jpeg'
import G2 from './Gallery-img/G2.jpeg'
import G3 from './Gallery-img/G3.jpeg'
import G4 from './Gallery-img/G4.jpeg'
import G5 from './Gallery-img/G5.jpeg'
import G6 from './Gallery-img/G6.jpeg'
import G7 from './Gallery-img/G7.jpeg'
import G8 from './Gallery-img/G8.jpg'
import G9 from './Gallery-img/G9.jpg'

const Gallery = () => {
  return (
    <>
    <h2 className='p-5 text-center'>Gallery page...</h2>
    <div className="container" id='gallery-area'>
      <div className="row">
        <div className="col-12 col-md-6 col-xl-4"> <Image src={G1} alt='Gallery img' /> </div>
        <div className="col-12 col-md-6 col-xl-4"> <Image src={G2} alt='Gallery img' /> </div>
        <div className="col-12 col-md-6 col-xl-4"> <Image src={G3} alt='Gallery img' /> </div>
        <div className="col-12 col-md-6 col-xl-4"> <Image src={G4} alt='Gallery img' /> </div>
        <div className="col-12 col-md-6 col-xl-4"> <Image src={G5} alt='Gallery img' /> </div>
        <div className="col-12 col-md-6 col-xl-4"> <Image src={G6} alt='Gallery img' /> </div>
        <div className="col-12 col-md-6 col-xl-4"> <Image src={G7} alt='Gallery img' /> </div>
        <div className="col-12 col-md-6 col-xl-4"> <Image src={G8} alt='Gallery img' /> </div>
        <div className="col-12 col-md-6 col-xl-4"> <Image src={G9} alt='Gallery img' /> </div>

      </div>
    </div>
    </>
  )
}

export default Gallery