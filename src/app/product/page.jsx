import React from 'react'
import Image from 'next/image'
import P1 from './Products/product-1.jpg'
import P2 from './Products/product-2.jpg'
// import P3 from './Products/product-3.png'
// import P4 from './Products/product-4.png'
// import P5 from './Products/product-5.png'
// import P6 from './Products/product-6.png'
// import P7 from './Products/product-7.png'



const Products = () => {
    return (
        <>
            <div className="container-fluid text-center" id='P-Card'>
                <div className="row">
                            <h2 className='text-center mt-4'>Our Products</h2>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <section>
                            <Image src={P1} alt='' id='P-img' />
                            <h3>Aleumdaun</h3>
                            <h5>Moistrurizing Lotion</h5>
                            <h5>Rs. 220 </h5>
                        </section>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <section>
                            <Image src={P2} alt='' id='P-img' />
                            <h3>Meneci-1000</h3>
                            <h5> Effervescent Tablets </h5>
                            <h5>Rs. 349 </h5>
                        </section>
                    </div>

                    {/* <div className="col-sm-12 col-md-6 col-lg-3">
                        <section>
                            <Image src={P3} alt='' id='P-img' />
                            <h3>Zebdermm</h3>
                            <h5>Hair Therapy</h5>
                            <h5>Rs. 480 </h5>
                        </section>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <section>
                            <Image src={P4} alt='' id='P-img' />
                            <h3>Zebdermm</h3>
                            <h5>Niaazinc Serum</h5>
                            <h5>Rs. 399 </h5>
                        </section>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                    <section>
                        <Image src={P5} alt=''  id='P-img'/>
                        <h3>Zebdermm</h3>
                        <h5>Hair Therapy</h5>
                        <h5>Rs. 591 </h5>
                    </section>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3">
                    <section>
                        <Image src={P6} alt=''  id='P-img'/>
                        <h3>Zebdermm</h3>
                        <h5>Hair Therapy</h5>
                        <h5>Rs. 460 </h5>
                    </section>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3">
                    <section>
                        <Image src={P1} alt=''  id='P-img'/>
                        <h3>Zebdermm</h3>
                        <h5>Hair Therapy</h5>
                        <h5>Rs. 800 </h5>
                    </section>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3">
                    <section>
                        <Image src={P7} alt=''  id='P-img'/>
                        <h3>Zebdermm</h3>
                        <h5>Hair Therapy</h5>
                        <h5>Rs. 365 </h5>
                    </section>
                </div> */}

                </div>
            </div>
        </>
    )
}

export default Products