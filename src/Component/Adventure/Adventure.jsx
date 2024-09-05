import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Titel from '../Titel/Titel';


const Adventure = () => {
    return (
        <>
            <section className='py-5'>
                <Container>
                    <Row>
                        <div>
                            <Titel />
                        </div>
                        <div className="col-4">
                            <div className="card-min shadow-lg p-3 mb-5 bg-body rounded">
                                <div className="d-flex">
                                    <div>
                                        <span>
                                            <i className="bi bi-tree fs-1 text-success"></i>
                                        </span>
                                    </div>
                                    <div className="card-content mx-4">
                                        <h3 className="h5 card-title">Ecotourism &amp; Resort</h3>
                                        <small className="card-desc fs-5">124 tours</small>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-4">
                            <div className="card-min shadow-lg p-3 mb-5 bg-body rounded">
                                <div className="d-flex">
                                    <div>
                                        <span>
                                        <i className="bi bi-egg-fried fs-1  text-success"></i>
                                        </span>
                                    </div>
                                    <div className="card-content mx-4">
                                        <h3 className="h5 card-title">Cultural & Foods</h3>
                                        <small className="card-desc fs-5">231 tours</small>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card-min shadow-lg p-3 mb-5 bg-body rounded">
                                <div className="d-flex">
                                    <div>
                                        <span>
                                        <i className="bi bi-car-front fs-1  text-success"></i>
                                        </span>
                                    </div>
                                    <div className="card-content mx-4">
                                        <h3 className="h5 card-title">Explorer & Adventure</h3>
                                        <small className="card-desc fs-5">311 tours</small>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card-min shadow-lg p-3 mb-5 bg-body rounded">
                                <div className="d-flex">
                                    <div>
                                        <span>
                                        <i className="bi bi-trophy-fill fs-1  text-success"></i>
                                        </span>
                                    </div>
                                    <div className="card-content mx-4">
                                        <h3 className="h5 card-title">Festival & Events</h3>
                                        <small className="card-desc fs-5">219 tours</small>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                         
                         
                        <div className="col-4">
                            <div className="card-min shadow-lg p-3 mb-5 bg-body rounded">
                                <div className="d-flex">
                                    <div>
                                        <span>
                                        <i className="bi bi-boombox-fill fs-1  text-success"></i>
                                        </span>
                                    </div>
                                    <div className="card-content mx-4">
                                        <h3 className="h5 card-title">Museums & Exhibitions</h3>
                                        <small className="card-desc fs-5">189 tours</small>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card-min shadow-lg p-3 mb-5 bg-body rounded">
                                <div className="d-flex">
                                    <div>
                                        <span>
                                        <i className="bi bi-person-walking fs-1  text-success"></i>
                                        </span>
                                    </div>
                                    <div className="card-content mx-4">
                                        <h3 className="h5 card-title">Hiking & Trekking</h3>
                                        <small className="card-desc fs-5">167 tours</small>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card-min shadow-lg p-3 mb-5 bg-body rounded">
                                <div className="d-flex">
                                    <div>
                                        <span>
                                        <i className="bi bi-bicycle fs-1  text-success"></i>
                                        </span>
                                    </div>
                                    <div className="card-content mx-4">
                                        <h3 className="h5 card-title">Motor & Bicycles</h3>
                                        <small className="card-desc fs-5">112 tours</small>
                                        
                                    </div>
                                </div>
                            </div>
                        </div> <div className="col-4">
                            <div className="card-min shadow-lg p-3 mb-5 bg-body rounded">
                                <div className="d-flex">
                                    <div>
                                        <span>
                                        <i className="bi bi-person-walking fs-1  text-success"></i>
                                        </span>
                                    </div>
                                    <div className="card-content mx-4">
                                        <h3 className="h5 card-title">Hiking & Trekking</h3>
                                        <small className="card-desc fs-5">167 tours</small>
                                        
                                    </div>
                                </div>
                            </div>
                        </div> <div className="col-4">
                            <div className="card-min shadow-lg p-3 mb-5 bg-body rounded">
                                <div className="d-flex">
                                    <div>
                                        <span>
                                        <i className="bi bi-person-check fs-1  text-success"></i>
                                        </span>
                                    </div>
                                    <div className="card-content mx-4">
                                        <h3 className="h5 card-title">Family Activities</h3>
                                        <small className="card-desc fs-5">211 tours</small>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                         
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Adventure
