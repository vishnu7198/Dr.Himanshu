import React from 'react'
import './globals.css'
import Image from 'next/image'
import slide from './himanshu-slider/slider-2.jpg'
import slide3 from './himanshu-slider/slider-3.jpg'
import slide4 from './himanshu-slider/slider-4.jpg'
import slide5 from './himanshu-slider/slider-5.jpg'
import Gallery from './gallery/page'
import About from './about/page'
import Results from './results/page'


const Slider = () => {
    return (
        <>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <Image src={slide4} class="d-block w-100" alt="..." id='slide-img'/>
                    </div>
                    <div class="carousel-item">
                        <Image src={slide3} class="d-block w-100" alt="..." id='slide-img'/>
                    </div>
                    <div class="carousel-item">
                        <Image src={slide} class="d-block w-100" alt="..." id='slide-img'/>
                    </div>
                    <div class="carousel-item">
                        <Image src={slide5} class="d-block w-100" alt="..."id='slide-img' />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <Results />
            <About />
        </>
    )
}

export default Slider