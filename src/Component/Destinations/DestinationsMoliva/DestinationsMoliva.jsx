import React from 'react'
import Top from '../../Top_Destinations/Top'
import { Container, Row, Col } from 'react-bootstrap';
import Img1 from '../../../assets/Destinonal-m/1.jpg'
import Img2 from '../../../assets/Destinonal-m/2.jpg'
import Img3 from '../../../assets/Destinonal-m/3.jpg'

const DestinationsMoliva = () => {
    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <Top />

                        <Col mb={4} className='position-relative py-5'>
                            {/* Image container */}
                            <div className="hover-img-top">
                                <img src={Img1} alt="" />

                                {/* Hover icon */}
                                <div>
                                    <div className="position-absolute top-50 end-50 d-flex justify-content-center align-items-center item-i rounded-circle text-white">
                                        <i className="bi bi-plus fs-2"></i>
                                    </div>
                                </div>

                                {/* Bottom text overlay */}
                                <div className="position-absolute bottom-0 start-0 w-100 p-3">
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex flex-column me-auto text-white">
                                            <h3>Fruska</h3>
                                            <span className="mb-3">210 tours</span>
                                        </div>
                                        <span className="circle-icon circle-icon-link bg-success item-rounded d-flex justify-content-center align-items-center text-white p-3 rounded-circle">
                                            <i className="bi bi-geo-alt"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col mb={4} className='position-relative py-5'>
                        <div className="hover-img-top">
                                <img src={Img2} alt="" />

                                {/* Hover icon */}
                                <div>
                                    <div className="position-absolute top-50 end-50 d-flex justify-content-center align-items-center item-i rounded-circle text-white">
                                        <i className="bi bi-plus fs-2"></i>
                                    </div>
                                </div>

                                {/* Bottom text overlay */}
                                <div className="position-absolute bottom-0 start-0 w-100 p-3">
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex flex-column me-auto text-white">
                                            <h3>Zolmir</h3>
                                            <span className="mb-3">176 tours</span>
                                        </div>
                                        <span className="circle-icon circle-icon-link bg-success item-rounded d-flex justify-content-center align-items-center text-white p-3 rounded-circle">
                                            <i className="bi bi-geo-alt"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col mb={4} className='position-relative py-5'>
                        <div className="hover-img-top">
                                <img src={Img3} alt="" />

                                {/* Hover icon */}
                                <div>
                                    <div className="position-absolute top-50 end-50 d-flex justify-content-center align-items-center item-i rounded-circle text-white">
                                        <i className="bi bi-plus fs-2"></i>
                                    </div>
                                </div>

                                {/* Bottom text overlay */}
                                <div className="position-absolute bottom-0 start-0 w-100 p-3">
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex flex-column me-auto text-white">
                                            <h3>Sitafo</h3>
                                            <span className="mb-3">321 tours</span>
                                        </div>
                                        <span className="circle-icon circle-icon-link bg-success item-rounded d-flex justify-content-center align-items-center text-white p-3 rounded-circle">
                                            <i className="bi bi-geo-alt"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default DestinationsMoliva
