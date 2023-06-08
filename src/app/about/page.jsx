import React from 'react'
import Image from 'next/image'
import A1 from '../himanshu-slider/A1.jpeg'
import A3 from '../himanshu-slider/slider-3.jpg'
import A4 from '../himanshu-slider/slider-4.jpg'
import A5 from '../himanshu-slider/slider-5.jpg'
// import A6 from '../himanshu-slider/slider-6.jpg'

const About = () => {
  return (
    <>
      <h2 className='p-5 text-center'>About Doctor</h2>
      <div className="container" id='gallery-area'>
        <div className="row">
          <div className="col-12 col-md-6  "> <Image src={A3} alt='Gallery img' /> </div>
          <div className="col-12 col-md-6 "> <Image src={A4} alt='Gallery img' /> </div>
          <div className="col-12 col-md-6 "> <Image src={A5} alt='Gallery img' /> </div>
          <div className="col-12 col-md-6 "> <Image src={A4} alt='Gallery img' /> </div>
          <div className="col-12 col-md-6 "> <Image src={A1} alt='Gallery img' /> </div>
          <div className="col-12 col-md-6 "> <Image src={A5} alt='Gallery img' /> </div>
        </div>
      </div>

    </>
  )
}

export default About
