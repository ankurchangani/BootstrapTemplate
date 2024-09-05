import React from 'react'
import { Container, Row } from 'react-bootstrap';
import '../../Banner/Banner.css'


const Form = () => {
    return (
        <div>
            <Container>
                <Row>

                    <div class="search-tours d-flex justify-content-end mb-4">
                        <div className=' px-5 p-4  d-inline  bg-danger  item-form'>
                            <form action="" >
                                <input type="text" placeholder='Where are you going?' className='w-100  inputbox px-5 p-2 ' />
                            </form>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Form
