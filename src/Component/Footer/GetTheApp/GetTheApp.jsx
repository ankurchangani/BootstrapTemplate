import React from 'react'
import { Col } from 'react-bootstrap';
import I1 from '../../../assets/FooterLogo/i1.svg'
import I2 from '../../../assets/FooterLogo/i2.svg'
import En from '../../../assets/FooterLogo/en.svg'



const GetTheApp = () => {
    return (
        <>
            <Col mb={3}>
                <div>
                    <h4 className='text-white pb-3'>Get the app</h4>

                </div>

                <div className="d-flex">

                    <div>
                        <img src={
                            I1
                        } alt="" />
                    </div>

                    <div className='mx-2'>
                        <img src={
                            I2
                        } alt="" />
                    </div>

                </div>
                <div className='d-flex  align-items-center mt-4 '>
                    
                <div className='mt-3 '>
                    <img src={
                        En
                    } alt="" width={19} />

                </div>
                    <span class="me-1 text-white mt-2 mx-2 fs-4">English</span><span>
                        <i className='bi bi-chevron-down text-white mb-5'></i>
                    </span>
                    <div className='mt-2 mx-2'>
                    <span class="me-1 text-white">USD (US Dollar)</span>
                   
                    </div>
                </div>

            </Col>
        </>
    )
}

export default GetTheApp
