import Image from 'next/image'
import React from 'react'
import T2 from './Treatments-img/T2.jpg'
import T3 from './Treatments-img/T3.jpg'
import T4 from './Treatments-img/T4.jpg'
import T5 from './Treatments-img/T5.jpg'

const Treatments = () => {
    return (
        <>
            <h2 className='pt-4 text-center'>Treatements</h2>

            <div className="container" id='treatment-area'>
                <div className="row">

                    <div className="col-sm-12 col-md-6">
                        <Image src={T2} alt='treate img' />
                    </div>
                    <div className="col-sm-12 col-md-6 p-3">
                    <h3 className='p-3'>Photo Facial</h3>
                        <p className='p-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet repellendus quam aspernatur in esse iusto, iste nam delectus tempore corrupti libero neque itaque. Numquam nesciunt perferendis aspernatur hic, ullam quam provident, praesentium ea temporibus ipsam reiciendis soluta nemo delectus adipisci ad! In quis ullam architecto ipsa dolorum! Dignissimos, maiores.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis libero ipsa eveniet atque excepturi deserunt totam, hic qui vero magni.
                        </p>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <Image src={T3} alt='treate img' />
                    </div>
                    <div className="col-sm-12 col-md-6 p-3">
                    <h3 className='p-3'>Photo Facial</h3>
                        <p className='p-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet repellendus quam aspernatur in esse iusto, iste nam delectus tempore corrupti libero neque itaque. Numquam nesciunt perferendis aspernatur hic, ullam quam provident, praesentium ea temporibus ipsam reiciendis soluta nemo delectus adipisci ad! In quis ullam architecto ipsa dolorum! Dignissimos, maiores.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis libero ipsa eveniet atque excepturi deserunt totam, hic qui vero magni.
                        </p>
                    </div>


                    <div className="col-sm-12 col-md-6">
                        <Image src={T4} alt='treate img' />
                    </div>
                    <div className="col-sm-12 col-md-6 p-3">
                    <h3 className='p-3'>Photo Facial</h3>
                        <p className='p-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet repellendus quam aspernatur in esse iusto, iste nam delectus tempore corrupti libero neque itaque. Numquam nesciunt perferendis aspernatur hic, ullam quam provident, praesentium ea temporibus ipsam reiciendis soluta nemo delectus adipisci ad! In quis ullam architecto ipsa dolorum! Dignissimos, maiores.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis libero ipsa eveniet atque excepturi deserunt totam, hic qui vero magni.
                        </p>
                    </div>


                    <div className="col-sm-12 col-md-6">
                        <Image src={T5} alt='treate img' />
                    </div>
                    <div className="col-sm-12 col-md-6 p-3">
                    <h3 className='p-3'>Photo Facial</h3>
                        <p className='p-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet repellendus quam aspernatur in esse iusto, iste nam delectus tempore corrupti libero neque itaque. Numquam nesciunt perferendis aspernatur hic, ullam quam provident, praesentium ea temporibus ipsam reiciendis soluta nemo delectus adipisci ad! In quis ullam architecto ipsa dolorum! Dignissimos, maiores.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis libero ipsa eveniet atque excepturi deserunt totam, hic qui vero magni.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Treatments