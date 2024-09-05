import React from 'react'
import { Container, Row } from 'react-bootstrap';
import IMg from '../../assets/TravelAgencyImg/a2@2x.jpg'
import Img2 from '../../assets/TravelAgencyImg/trip-best@2x.png'
// import '../TravelAgency/TravelAgency.css'
import TravelBTN from '../buttons/travel/TravelBTN.JSX';


const TravelAgency = () => {
    return (
        <>
            <section className='py-5'>
                <Container>
                    <Row>
                        <div className="col-6 position-relative">
                            <div className='trvelimg'>
                                <img src={
                                    IMg
                                } alt="" width={450} />
                            </div>
                            <div  className=''>

                                <div className=' text-center overflow-hidden vertical-award  '>
                                    <img src={
                                        Img2
                                    } alt="" className='position-absolute  img-2  shadow-lg p-3 mb-5 bg-body-tertiary rounded' width={130}  />
                                </div>
                            </div>
                        </div>

                        <div className="col-6" >
                            <div className="about-contnet  mb-4 ">
                                <div class="block-title">
                                    <small className='fs-4 text-success'>About us</small>
                                    <h2 >Moliva Travel Agency</h2>
                                </div>

                                <p className='mt-3'>Moliva Travel Agency offers unique and memorable tours, providing rich experiences in the beautiful country of Moliva. With a professional and dedicated team, we are committed to bringing you wonderful, safe, and exciting journeys, helping you explore the beauty of the world.

                                </p>
                                <div className="col-12  d-flex">
                                    <div className="col-6">
                                        <div>

                                           <span className='text-success fs-4'><i className="bi bi-check2-circle "></i></span> Great travel experiences
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div>
                                            <span className=''><i className="bi bi-coin text-success fs-4 mt-3 mx-1" ></i></span>Competitive pricing offers
                                        </div>
                                    </div>

                                </div>

                                <div className="col-12  d-flex mt-4">
                                    <div className="col-6">
                                        <div>
                                            <span><i class="bi bi-bag-check text-success fs-4 mt-3 mx-1"></i></span>Flexible itinerary options
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div>
                                            <span><i class="bi bi-building-check text-success fs-4 mt-3 mx-1"></i></span>Leading industry reputation
                                        </div>
                                    </div>

                                </div>
                                <div className='mt-4'>
                                    <TravelBTN />

                                </div>

                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TravelAgency
