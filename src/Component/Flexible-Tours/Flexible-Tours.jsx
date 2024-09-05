import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Titel from '../Titel/Titel';
import CustomeCard from './Card/Card';

const FlexibleTours = () => {
    return (
        <>
            <section className='py-5 bg-Tours'>
                <Container>
                    <Row>
                        <div>
                            <Titel />
                        </div>
                        <div>
                            <CustomeCard/>
                        </div>
                       
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default FlexibleTours;
