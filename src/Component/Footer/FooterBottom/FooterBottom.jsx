import React from 'react'

const FooterBottom = () => {
  return (
    <>
    <div className='py-5'>

      <hr className='text-white '></hr>

      <div className=' d-flex   justify-content-between'>
        <p className='text-white'>© 2024 Moliva Travel Agency. All rights reserved.</p>

        <div>
            <ul className='d-flex '>
                <li>
                    <a href="" className='text-white text-decoration-none '>Privacy Policy</a>
                </li>

                <li className='mx-2'>
                    <a href="" className='text-white text-decoration-none '>Terms of Use</a>
                </li>
            </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default FooterBottom
