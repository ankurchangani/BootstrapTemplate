import React from 'react'


const TouristsTitel = () => {
    return (
        <>
            <div className='d-flex  align-items-center
' >
                <div>

                    <small className='text-success fs-5'>Genuine Reviews</small>
                    <h2 className=''>Tourists talk about us</h2>
                </div>

                <div className='d-flex align-items-center '>

                    <div className=' mt-4 ms-5'>
                        <strong className='fs-2 '>+95K</strong>
                        <span className='fs-4 ms-2'>Tour bookings</span>
                    </div>
                    <div className='mt-4 ms-5'>
                        <strong className='fs-2 '>4.9</strong>
                        <span className='mx-2'>
                            <i className='bi bi-star-fill text-warning'></i>
                            <i className='bi bi-star-fill text-warning'></i>
                            <i className='bi bi-star-fill text-warning'></i>
                            <i className='bi bi-star-fill text-warning'></i>
                            <i className='bi bi-star-fill text-warning'></i>

                        </span>

                        <span>(+85K reviews)</span>

                    </div>
                </div>

            </div>
        </>
    )
}

export default TouristsTitel
