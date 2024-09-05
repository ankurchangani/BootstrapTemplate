


    import React from 'react';
    import { Container, Row, Col, Carousel } from 'react-bootstrap';

    import John from '../../assets/MolivaImg/Moliva5.jpg';
    import EmilySmith from '../../assets/MolivaImg/Moliva6.jpg';
    import AlexMark from '../../assets/MolivaImg/Moliva10.jpg';
    import AriolDeep from '../../assets/MolivaImg/Moliva11.jpg';




    import TouristsTitel from './TouristsTitel/TouristsTitel';

    const Tourists = () => {
        return (
            <>
                <section className='py-5'>
                    <Container>
                        <TouristsTitel />
                        <Row>
                            <Col>
                                <Carousel
                                    prevLabel=""
                                    nextLabel=""
                                    controls
                                    indicators={false}
                                    className="tourist-carousel"
                                >

                                    <Carousel.Item>
                                        <Row>
                                            <Col md={6}>
                                                <div className="shadow-sm rounded p-3 mt-2 hover-t">
                                                    <div className='d-flex'>
                                                        <img src={John} alt="John Doe" width={64} className='rounded-circle' />
                                                        <div className='ms-2'>
                                                            <h3 className="mb-0">John Doe</h3>
                                                            <span>Venice, Italy</span>
                                                        </div>
                                                    </div>
                                                    <p className='mt-2'>
                                                        Our trip to Moliva was amazing! Moliva Travel Agency organized everything perfectly,
                                                        from the hotels to the sightseeing spots. I was very impressed and will definitely return!
                                                    </p>
                                                    <div className='d-flex justify-content-between'>
                                                        <div className='text-warning'>
                                                            <i className='bi bi-star-fill'></i>
                                                            <i className='bi bi-star-fill'></i>
                                                            <i className='bi bi-star-fill'></i>
                                                            <i className='bi bi-star-half'></i>
                                                        </div>
                                                        <span className="testimonial-date rounded-1 text-white bg-success p-1">Jun 25 24</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="shadow-sm rounded p-3 mt-2 hover-t">
                                                    <div className='d-flex'>
                                                        <img src={EmilySmith} alt="Emily Smith" width={64} className='rounded-circle' />
                                                        <div className='ms-2'>
                                                            <h3 className="mb-0">Emily Smith</h3>
                                                            <span>Chicago, USA</span>
                                                        </div>
                                                    </div>
                                                    <p className='mt-2'>
                                                        We had an unforgettable vacation in Moliva thanks to the excellent service of Moliva Travel Agency.
                                                        The itinerary was well-arranged, and the support team was very helpful. Best trip ever!
                                                    </p>
                                                    <div className='d-flex justify-content-between'>
                                                        <div className='text-warning'>
                                                            <i className='bi bi-star-fill'></i>
                                                            <i className='bi bi-star-fill'></i>
                                                            <i className='bi bi-star-fill'></i>
                                                            <i className='bi bi-star-half'></i>
                                                        </div>
                                                        <span className="testimonial-date rounded-1 text-white bg-success p-1">Jun 28 24</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Carousel.Item>
                                                <Row>
                                                    <Col md={6}>
                                                        <div className="shadow-sm rounded p-3 mt-2 hover-t">
                                                            <div className='d-flex'>
                                                                <img src={EmilySmith} alt="Emily Smith" width={64} className='rounded-circle' />
                                                                <div className='ms-2'>
                                                                    <h3 className="mb-0">Emily Smith</h3>
                                                                    <span>Chicago, USA</span>
                                                                </div>
                                                            </div>
                                                            <p className='mt-2'>
                                                                We had an unforgettable vacation in Moliva thanks to the excellent service of Moliva Travel Agency.
                                                                The itinerary was well-arranged, and the support team was very helpful. Best trip ever!
                                                            </p>
                                                            <div className='d-flex justify-content-between'>
                                                                <div className='text-warning'>
                                                                    <i className='bi bi-star-fill'></i>
                                                                    <i className='bi bi-star-fill'></i>
                                                                    <i className='bi bi-star-fill'></i>
                                                                    <i className='bi bi-star-half'></i>
                                                                </div>
                                                                <span className="testimonial-date rounded-1 text-white bg-success p-1">Jun 28 24</span>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    {/* Third Slide */}
                                                    <Col md={6}>
                                                        <div className="shadow-sm rounded p-3 mt-2 hover-t">
                                                            <div className='d-flex'>
                                                                <img src={EmilySmith} alt="Emily Smith" width={64} className='rounded-circle' />
                                                                <div className='ms-2'>
                                                                    <h3 className="mb-0">Emily Smith</h3>
                                                                    <span>Chicago, USA</span>
                                                                </div>
                                                            </div>
                                                            <p className='mt-2'>
                                                                We had an unforgettable vacation in Moliva thanks to the excellent service of Moliva Travel Agency.
                                                                The itinerary was well-arranged, and the support team was very helpful. Best trip ever!
                                                            </p>
                                                            <div className='d-flex justify-content-between'>
                                                                <div className='text-warning'>
                                                                    <i className='bi bi-star-fill'></i>
                                                                    <i className='bi bi-star-fill'></i>
                                                                    <i className='bi bi-star-fill'></i>
                                                                    <i className='bi bi-star-half'></i>
                                                                </div>
                                                                <span className="testimonial-date rounded-1 text-white bg-success p-1">Jun 28 24</span>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Carousel.Item>
                                        </Row>
                                    </Carousel.Item>

                                    {/* Second Slide */}

                                    <Carousel.Item>
                                        <Row>
                                            <Col md={6}>
                                                <div className="shadow-sm rounded p-3 mt-2 hover-t">
                                                    <div className='d-flex'>
                                                        <img src={AlexMark} alt="John Doe" width={64} className='rounded-circle' />
                                                        <div className='ms-2'>
                                                            <h3 className="mb-0">Alex Mark</h3>
                                                            <span>Texas, USA</span>
                                                        </div>
                                                    </div>
                                                    <p className='mt-2'>

                                                        Moliva is a perfect destination, and Moliva Travel Agency made our trip flawless.
                                                        From booking to sightseeing activities, everything was wonderful. I am very satisfied!

                                                    </p>
                                                    <div className='d-flex justify-content-between'>
                                                        <div className='text-warning'>
                                                            <i className='bi bi-star-fill'></i>
                                                            <i className='bi bi-star-fill'></i>
                                                            <i className='bi bi-star-fill'></i>
                                                            <i className='bi bi-star-half'></i>
                                                        </div>
                                                        <span className="testimonial-date rounded-1 text-white bg-success p-1">Jun 28 24</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="shadow-sm rounded p-3 mt-2 hover-t">
                                                    <div className='d-flex'>
                                                        <img src={AriolDeep} alt="Emily Smith" width={64} className='rounded-circle' />
                                                        <div className='ms-2'>
                                                            <h3 className="mb-0">Ariol Deep</h3>
                                                            <span>Lisbon, Portugal</span>
                                                        </div>
                                                    </div>
                                                    <p className='mt-2'>
                                                        We had an unforgettable vacation in Moliva thanks to the excellent service of Moliva Travel Agency.
                                                        The itinerary was well-arranged, and the support team was very helpful. Best trip ever!
                                                    </p>
                                                    <div className='d-flex justify-content-between'>
                                                        <div className='text-warning'>
                                                            <i className='bi bi-star-fill'></i>
                                                            <i className='bi bi-star-fill'></i>
                                                            <i className='bi bi-star-fill'></i>
                                                            <i className='bi bi-star-half'></i>
                                                        </div>
                                                        <span className="testimonial-date rounded-1 text-white bg-success p-1">Jun 28 24</span>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>


                                </Carousel>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    };

    export default Tourists;


