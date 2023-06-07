import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container-fluid " id='footer'>
                <div className="row">

                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <ul>
                            <h2>Dr. Himanshu Batham </h2>
                            <p>
                                Dr. Himanshu Batham is a renowned and highly acclaimed homeopathic doctor and aesthetician, who has more than 6 years of experience.
                            </p>
                        </ul>

                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <ul>
                            <h2>Useful Links</h2>
                            <li><a href="/">Home</a></li>
                            <li><a href="/product">Our Products</a></li>
                            <li><a href="#">About Doctor</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Results</a></li>
                        </ul>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <ul>
                            <h2>Clinic Location</h2>

                            <h3>Contact Number : 098275 99798</h3>
                            <h3>Address</h3>
                            <address>
                                Skin Care Clinic, Sagar Road, Chhatarpur City, Chhatarpur - 471001 (Dr. Colony Behind Jitendra Singh Bundela)
                            </address>

                            <h3>Timing</h3>
                            <h5>Monday to Saturday - 10:00 AM To 08:00 PM</h5>

                            <h3>Sunday - Closed</h3>

                        </ul>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer