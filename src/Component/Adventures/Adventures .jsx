import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const Adventures  = () => {
  return (
    <>
      <section  className='d-flex justify-content-center align-items-center ' style={{background : '#0A3E59', padding : '120px'}}>
            <Container>
                <Row>
                    <div>
                        <h5 className='text-uppercase text-white text-center'>Start Exploring</h5>
                        <h2 class="text-center  text-white fs-1">Are you ready for adventures to Moliva?</h2>
                    </div>

                    <div className='d-flex justify-content-center mt-2'>
                    <Button variant="success mx-3 px-4 p-3"><span><i className="bi bi-calendar-fill mx-2 "></i></span>Book tours</Button>{' '}
                    <Button variant="outline-light mx-3 px-4 p-3"><span><i class="bi bi-envelope mx-2 "></i></span>Contact Us</Button>{' '}
                    </div>
                </Row>
            </Container>
      </section>
    </>
  )
}

export default Adventures 
