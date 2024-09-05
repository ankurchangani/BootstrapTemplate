import React from 'react';
import { Col } from 'react-bootstrap';

const MolivaTravel = () => {
  return (
    <Col md={3}>
      <div>
        <h4 className='text-white pb-3'>Moliva Travel</h4>

        <ul className='p-0 list-unstyled'> {/* Remove default padding and list styling */}
          <li className='mb-3'>
            <a href="" className='text-decoration-none text-white'>About us</a>
          </li>
          <li className='mb-3'>
            <a href="" className='text-decoration-none text-white'>Destinations</a>
          </li>
          <li className='mb-3'>
            <a href="" className='text-decoration-none text-white'>Moliva Tours</a>
          </li>
          <li className='mb-3'>
            <a href="" className='text-decoration-none text-white'>Travel insight</a>
          </li>
          <li className='mb-3'>
            <a href="" className='text-decoration-none text-white'>Contact us</a>
          </li>
        </ul>
      </div>
    </Col>
  );
};

export default MolivaTravel;
