import React from 'react'
import Titel from '../Titel/Titel';
import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import Moliva1 from '../../assets/MolivaImg/Moliva1.jpg'
import Moliva2 from '../../assets/MolivaImg/Moliva2.jpg'
import Moliva3 from '../../assets/MolivaImg/Moliva3.jpg'



const Moliva = () => {
    return (
        <>
            <section className='py-5'>
                <Container>
                    <Row>
                        <Titel />
                        <div className="col-4 ">

                            <Card style={{ width: '22rem' }} className='shadow-lg hover-effect-3'>
                                <Card.Img variant="top" className='position-relative' src={
                                    Moliva1
                                } />
                                <div className=' '>

                                    {/* <i class="bi bi-plus fs-2 text-black"></i> */}
                                </div>

                                <Card.Body  >

                                    <Card.Text className='me-2 position-relative'>
                                        <h3 className='fs-5 mb-4'>Explore castles and villages</h3>

                                        <div className='d-flex  '>
                                            <span class="me-3"><i class="bi bi-calendar-day"></i> 2 days</span>
                                            <span class="mx-2"><i class="bbi bi-geo-alt"></i> 2 Destinations</span>
                                        </div>

                                        <div className='d-flex align-items-center p-2  mt-4' style={{ background: '#f1f2f4' }}>
                                            <span className=''>4.9 </span>
                                            <i className='bi bi-star-fill text-warning'></i>
                                            <i className='bi bi-star-fill text-warning'></i>
                                            <i className='bi bi-star-fill text-warning'></i>
                                            <i className='bi bi-star-fill text-warning'></i>
                                            <i className='bi bi-star-fill text-warning'></i>

                                            <span className=''>(231 reviews)</span>


                                        </div>
                                        <div class="d-flex align-items-center mt-4">
                                            <div class="me-auto">
                                                <strong class="fs-4 fw-semibold"><sup>$</sup>165.80</strong>
                                                <span class="fsm-4 text-secondary"><sup>$</sup><del class="">230.00</del></span>
                                            </div>
                                            <a class="bi bi-arrow-right mx-2 bg-success d-flex justify-content-center align-items-center  rounded-circle text-white" style={{ width: '40px', height: '40px' }}>

                                            </a>
                                        </div>

                                        <div class="position-absolute  itme-h   end-0 translate-middle-y me-4">
                                            <button type="button" class="circle-icon like-icon shadow-sm" style={{ width: '40px', height: '40px' }}>
                                                <i class="bi bi-heart p-2 bg-white text-black rounded-circle" ></i>
                                            </button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>

                                <Card.Body>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-4 ">

                            <Card style={{ width: '22rem' }} className='shadow-lg hover-effect-3'>
                                <Card.Img variant="top" className='position-relative' src={
                                    Moliva2
                                } />
                                <div className=' '>

                                    {/* <i class="bi bi-plus fs-2 text-black"></i> */}
                                </div>

                                <Card.Body  >

                                    <Card.Text className='me-2 position-relative'>
                                        <h3 className='fs-5 mb-4'>Visit valleys and lakes in Kardal</h3>

                                        <div className='d-flex  '>
                                            <span class="me-3"><i class="bi bi-calendar-day"></i> 3 days</span>
                                            <span class="mx-2"><i class="bbi bi-geo-alt"></i> 3 Destinations</span>
                                        </div>

                                        <div className='d-flex align-items-center p-2  mt-4' style={{ background: '#f1f2f4' }}>
                                            <span className=''>4.9 </span>
                                            <i className='bi bi-star-fill text-warning'></i>
                                            <i className='bi bi-star-fill text-warning'></i>
                                            <i className='bi bi-star-fill text-warning'></i>
                                            <i className='bi bi-star-fill text-warning'></i>
                                            <i className='bi bi-star-fill text-warning'></i>

                                            <span className=''>(231 reviews)</span>


                                        </div>
                                        <div class="d-flex align-items-center mt-4">
                                            <div class="me-auto">
                                                <strong class="fs-4 fw-semibold"><sup>$</sup>185.80</strong>
                                                <span class="fsm-4 text-secondary"><sup>$</sup><del class="">230.00</del></span>
                                            </div>
                                            <a class="bi bi-arrow-right mx-2 bg-success d-flex justify-content-center align-items-center  rounded-circle text-white" style={{ width: '40px', height: '40px' }}>

                                            </a>
                                        </div>

                                        <div class="position-absolute  itme-h   end-0 translate-middle-y me-4">
                                            <button type="button" class="circle-icon like-icon shadow-sm" style={{ width: '40px', height: '40px' }}>
                                                <i class="bi bi-heart p-2 bg-white text-black rounded-circle" ></i>
                                            </button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>

                                <Card.Body>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-4 ">

                            <Card style={{ width: '22rem' }} className='shadow-lg hover-effect-3'>
                                <Card.Img variant="top" className='position-relative' src={
                                    Moliva3
                                } />
                                <div className=' '>

                                    {/* <i class="bi bi-plus fs-2 text-black"></i> */}
                                </div>

                                <Card.Body  >

                                    <Card.Text className='me-2 position-relative'>
                                        <h3 className='fs-5 mb-4'>Bathing at Noriva Beach</h3>

                                        <div className='d-flex  '>
                                            <span class="me-3"><i class="bi bi-calendar-day"></i> 4 days</span>
                                            <span class="mx-2"><i class="bbi bi-geo-alt"></i> 4 Destinations</span>
                                        </div>

                                        <div className='d-flex align-items-center p-2  mt-4' style={{ background: '#f1f2f4' }}>
                                            <span className=''>4.9 </span>
                                            <i className='bi bi-star-fill text-warning'></i>
                                            <i className='bi bi-star-fill text-warning'></i>
                                            <i className='bi bi-star-fill text-warning'></i>
                                            <i className='bi bi-star-fill text-warning'></i>
                                            <i className='bi bi-star-fill text-warning'></i>

                                            <span className=''>(231 reviews)</span>


                                        </div>
                                        <div class="d-flex align-items-center mt-4">
                                            <div class="me-auto">
                                                <strong class="fs-4 fw-semibold"><sup>$</sup>210.80</strong>
                                                <span class="fsm-4 text-secondary"><sup>$</sup><del class="">230.00</del></span>
                                            </div>
                                            <a class="bi bi-arrow-right mx-2 bg-success d-flex justify-content-center align-items-center  rounded-circle text-white" style={{ width: '40px', height: '40px' }}>

                                            </a>
                                        </div>

                                        <div class="position-absolute  itme-h   end-0 translate-middle-y me-4">
                                            <button type="button" class="circle-icon like-icon shadow-sm" style={{ width: '40px', height: '40px' }}>
                                                <i class="bi bi-heart p-2 bg-white text-black rounded-circle" ></i>
                                            </button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>

                                <Card.Body>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Moliva
