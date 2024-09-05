import React from 'react'
import { Container, Row } from 'react-bootstrap';

const Featured = () => {
    return (
        <>
            <section className='bg-white p-5'>
                <Container>
                    <Row>
                        <div className="col-3">
                            <div className="start-Item d-flex align-items-center text-black ">
                                <h3 className='fs-1'>
                                    +250
                                </h3>
                                <p class="stats-desc ms-2  mt-2">
                                    Attractive tours <br></br> around Moliva
                                </p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="start-Item d-flex align-items-center text-black ">
                                <h3 className='fs-1'>
                                    +1.1M
                                </h3>
                                <p class="stats-desc ms-2  mt-2">
                                Clients from
                                around the world
                                </p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="start-Item d-flex align-items-center text-black ">
                                <h3 className='fs-1'>

                                    4.9
                                </h3>
                                <p class="stats-desc ms-2  mt-2">
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i><br></br>
                                    On Tripadvisor
                                </p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="start-Item d-flex align-items-center text-black ">
                                <h3 className='fs-1'>
                                    +250
                                </h3>
                                <p className='ms-2  mt-2'>
                                Our clients
                                <br></br>
                                are satisfied
                                </p>
                            </div>
                        </div>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Featured
