import React from 'react'
import { Container, Row } from 'react-bootstrap';
import '../Banner/Banner.css'
import Btn from '../buttons/btn';
import Form from './form/form';
const Banner = () => {
    return (
        <>
            <section className='banner py-5 '>
                <Container />
                <Row className='g-0'>
                    <div className="col-12 ">
                        <div className="col-6 ms-5 hero-c">
                            <div className="hero ">

                                <div className="hero-sub-title  text-white">
                                    <h1>Explore Moliva</h1>
                                </div>

                                <h2 className="display-4 hero-title mt-3 text-white">
                                    Explore majestic mountain ranges
                                </h2>

                                <div className='btn me-2'>
                                    <Btn />
                                </div>
                            </div>

                        </div>
                        <div>
                            <Form />
                        </div>



                    </div>
                </Row>
                <Container />
            </section>
        </>
    )
}

export default Banner
