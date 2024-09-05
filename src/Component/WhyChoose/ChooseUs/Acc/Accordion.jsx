import React from 'react';
import { Accordion } from 'react-bootstrap';

const TravelAccordion = () => {
  return (
    <Accordion defaultActiveKey="0" className='mt-5'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Leading travel agency in Moliva</Accordion.Header>
        <Accordion.Body>
          Top-rated agency in Moliva is renowned for exceptional service and unforgettable travel experiences.
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="1">
        <Accordion.Header>Years of experience in tour operations</Accordion.Header>
        <Accordion.Body>
          With years of expertise, we excel at organizing seamless, enjoyable, and memorable tours for every traveler.
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="2">
        <Accordion.Header>Flexible tour packages and bookings</Accordion.Header>
        <Accordion.Body>
          We offer customizable trips with flexible packages and convenient booking options tailored to your needs.
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="3">
        <Accordion.Header>Best prices with exclusive offers</Accordion.Header>
        <Accordion.Body>
          Enjoy unbeatable prices and exclusive offers, ensuring you receive great value and memorable vacation experiences.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default TravelAccordion;
