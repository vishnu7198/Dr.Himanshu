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

                    <div className="col-sm-12 col-md-6 mt-5">
                        <Image src={T2} alt='treate img' />
                    </div>
                    <div className="col-sm-12 col-md-6 p-3">
                    <h3 className='p-3 mt-5'>Stubborn whiteheads and blackheads</h3>
                        <p className='p-3'>
                        Give treatment six to eight weeks to work. If you still see blemishes, you may want to see a dermatologist. A procedure like comedo (medical term for blackheads and whiteheads) extraction may help. Prescription-strength acne treatment is another option.                        </p>
                    </div>

                    <div className="col-sm-12 col-md-6 mt-5">
                        <Image src={T3} alt='treate img' />
                    </div>
                    <div className="col-sm-12 col-md-6 p-3">
                    <h3 className='p-3 mt-5'>Treating pustules</h3>
                        <p className='p-3'>
                        To treat, wash your face with an acne product that contains benzoyl peroxide or salicylic acid. Resist the temptation to pop these. It can worsen acne. If you don’t see results from treatment in six to eight weeks, see a dermatologist.                        </p>
                    </div>


                    <div className="col-sm-12 col-md-6 mt-5">
                        <Image src={T4} alt='treate img' />
                    </div>
                    <div className="col-sm-12 col-md-6 p-3">
                    <h3 className='p-3 mt-5'>WHICH MOISTURIZER WORKS BEST ON VERY DRY SKIN?</h3>
                        <p className='p-3'>
                        If you have very dry skin, use an ointment like petroleum jelly or a thick cream. Butters and oils tend to liquefy on the skin, so they’re less effective as moisturizers.                        </p>
                    </div>


                    <div className="col-sm-12 col-md-6 mt-5">
                        <Image src={T5} alt='treate img' />
                    </div>
                    <div className="col-sm-12 col-md-6 p-3 mt-2">
                    <h3 className='p-3 mt-5'>When to see a dermatologist about dry skin</h3>
                        <p className='p-3'>
                        If you still have dry skin after giving these top tips time to work, it’s best to see a board-certified dermatologist. Sometimes getting relief requires a prescription-strength ointment or a bit of individualized insight from the skin expert.Some people who have darker skin tones live for years with an undiagnosed skin condition. They often mistakenly believe their skin is just too dry for moisturizer to work.                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Treatments