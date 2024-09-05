import React from 'react'
import TravelAccordion from './Acc/Accordion'


const ChooseUs = () => {
    return (
        <>
            <div className="col-6 ">
                <small className='text-success text-uppercase fs-5'>Great experience</small>

                <h3 className='mb-4 fs-2'>Why choose us</h3>

                <p className='mt-2'>
                    We are a leading travel agency in Moliva with many years of experience, highly rated and appreciated by tourists.
                </p>
                <TravelAccordion/>

                <button type="button" class="px-4 p-2 mt-4 hover-btn-read btn btn-success">View tours <span class="bi bi-arrow-right mx-2 "></span></button>
              </div>
        </>
    )
}

export default ChooseUs
