import React from 'react';
import { Col } from 'react-bootstrap'; 

const ContactInfo = () => {
  return (
    <Col md={3}> 
      <div>
        <h4 className='text-white pb-3'>Contact Info</h4>

        <p className='mt-2'>
          <span style={{ color: '#FFFFFFA6' }}>
            No 234, Placer Loquen Marsei Niriva, Moliva.
          </span>
        </p>

        <p className='mt-3'>
          <span style={{ color: '#FFFFFFA6' }}>
            No 234, Placer Loquen Marsei Niriva, Moliva.
          </span>
        </p>

        <p>
          <a href="" className='text-white'>Booking@example.com</a>
        </p>

        <p>
          <a href="" className='text-white'>www.example.com</a>
        </p>
      </div>
    </Col>
  );
};

export default ContactInfo;
