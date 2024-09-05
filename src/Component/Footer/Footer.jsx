import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import FooterLogo from '../../assets/FooterLogo/footer-logo@2x.png';
import ContactInfo from './ContactInfo/ContactInfo';
import MolivaTravel from './Moliva Travel/MolivaTravel';
import GetTheApp from './GetTheApp/GetTheApp';
import FooterBottom from './FooterBottom/FooterBottom';
const Footer = () => {
  return (
    <section style={{ paddingTop: '90px', paddingBottom: '90px', background: '#042233' }}>
      <Container>
        <Row>
          <Col md={3}>
            <div>
              <div className='mb-4'>
                <img src={FooterLogo} alt="Footer Logo" width={135} />
              </div>

              <em className='text-white mt-2'>
                Moliva Travel Agency offers unique and memorable tours, providing rich experiences in the beautiful country of Moliva.
              </em>

              <div className='text-white mt-2'>
                <i className="bi bi-facebook mx-2"></i>
                <i className="bi bi-messenger mx-2"></i>
                <i className="bi bi-meta mx-2"></i>
                <i className="bi bi-whatsapp mx-2"></i>
                <i className='bi bi-youtube mx-2'></i>
              </div>
            </div>
          </Col>

          <ContactInfo />

          <MolivaTravel/>

          <GetTheApp/>

        <FooterBottom/>

        </Row>
      </Container>
    </section>
  );
};

export default Footer;
