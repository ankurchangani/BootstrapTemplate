import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


const BannerDestinations = () => {
    return (
        <div>
            <section className='py-5  Destinations-bg'>
                <Container>
                    <Row>
                        <Col mb={12}>
                            <Col mb={6} className='ms-5 hero-c'>
                                <div>
                                    <span className='text-white'>Moliva tours</span>
                                    <h1 className='display-4  text-white '>
                                        Destinations
                                    </h1>

                                    <ul className='d-flex'>
                                        <li>
                                            <a href="" className='me-3 text-decoration-none text-white'>Home</a>
                                        </li>

                                        <li>
                                            <a href="" className='me-3 text-decoration-none text-white'>Destinations</a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default BannerDestinations
