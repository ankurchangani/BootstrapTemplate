import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';

const CustomeCard = () => { 
    return (
        <>
        <Row>

            <div className="col-4">
                <div className=" ">
                    <Card
                        style={{ width: '22rem' }}
                        className="shadow-lg p-3 mb-5  rounded hover-effect"
                    >
                        <div>
                            <i
                                className="bi bi-person bg-success rounded-circle text-white fs-3 d-flex justify-content-center align-items-center ms-3 mt-2"
                                style={{ width: '50px', height: '50px' }}
                            ></i>
                        </div>
                        <Card.Body>
                            <Card.Title>
                                <h4 className="h4 card-title">Group tours</h4>
                            </Card.Title>
                            <Card.Text>
                                Join our group tours to explore stunning destinations with like-minded travelers. Fun and camaraderie guaranteed.
                            </Card.Text>

                            <span className="text-uppercase ">View tours</span>
                            <i className="bi bi-arrow-right mx-2"></i>

                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="col-4">
                <div>
                    <Card
                        style={{ width: '22rem', background: '#6cb015' }}
                        className="Private_tours p-3 mb-5 rounded hover-effect-2"
                    >
                        <div>
                            <i
                                className="bi bi-person bg-success rounded-circle text-white fs-3 d-flex justify-content-center align-items-center ms-3 mt-2"
                                style={{ width: '50px', height: '50px' }}
                            ></i>
                        </div>
                        <Card.Body>
                            <Card.Title>
                                <h4 className="h4 card-title text-white">Group tours</h4>
                            </Card.Title>
                            <Card.Text className="text-white">
                                Join our group tours to explore stunning destinations with like-minded travelers. Fun and camaraderie guaranteed.
                            </Card.Text>
                            <span className="text-uppercase text-white">View tours</span>
                            <i className="bi bi-arrow-right mx-2 text-white"></i>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="col-4">
                <div className=" ">
                    <Card
                        style={{ width: '22rem' }}
                        className="shadow-lg p-3 mb-5  rounded hover-effect"
                    >
                        <div>
                            <i
                                className="bi bi-person-walking bg-success rounded-circle text-white fs-3 d-flex justify-content-center align-items-center ms-3 mt-2"
                                style={{ width: '50px', height: '50px' }}
                            ></i>
                        </div>
                        <Card.Body>
                            <Card.Title>
                                <h4 className="h4 card-title">Group tours</h4>
                            </Card.Title>
                            <Card.Text>
                                Join our group tours to explore stunning destinations with like-minded travelers. Fun and camaraderie guaranteed.
                            </Card.Text>

                            <span className="text-uppercase ">View tours</span>
                            <i className="bi bi-arrow-right mx-2"></i>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Row>
        </>
    );
}

export default CustomeCard; 



