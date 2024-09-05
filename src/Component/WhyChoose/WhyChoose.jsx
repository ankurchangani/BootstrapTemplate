import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Img from '../../assets/choose/choose.jpg'
import ChooseUs from './ChooseUs/ChooseUs';



const WhyChoose = () => {
    return (
        <>
            <section className='py-5'>
                <Container>
                    <Row>
                        <div className="col-6 position-relative ">
                            <div>
                                <img src={
                                    Img
                                } alt="" width={410} />
                            </div>
                            <div className='shadow-lg  bg-body-tertiary rounded position-absolute contant-p ' style={{ width: '130px' }}>

                                <div className='p-2  d-flex  flex-column  align-items-center '>
                                    <h3>4.9</h3>
                                    <div className='d-flex text-warning'>

                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                    </div>
                                    <small>2394 reviews</small>


                                    <small class="review-label px-4 p-1 rounded-pill text-white" style={{ background: '#6cb015' }}>Excellent</small>

                                    <div class="review-footer text-white text-center w-100 mt-2">
                                        <small>Tripadvisor</small>
                                    </div>
                                </div>
                            </div>

                           {/* <div  className="vertical-experience d-inline px-4 p-3" style={{background : '#6cb015'}}>
                            <h3>30</h3>
                           </div> */}
                        </div>

                        <ChooseUs/>
                       
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default WhyChoose
