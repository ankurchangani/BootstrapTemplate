import React from 'react';
import Container from 'react-bootstrap/Container';
import NavbarHeader from './Navebar/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo/logo@2x.png';

const Header = () => {
    return (
        <>
            <header className='p-2'>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <div className='logo'>
                            <img src={Logo} alt="" width={200} />
                        </div>

                        <div>
                            <NavbarHeader />
                        </div>
                        <div className='d-flex'>
                            <div>
                                <i className="bi bi-bag-plus icon-header me-3 bg-gray rounded-circle p-1 icon position-relative">
                                    <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-success'>3</span>
                                </i>
                            </div>
                            <i className="bi bi-suit-heart icon-header me-3 bg-gray rounded-circle p-1 icon position-relative">
                                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-success'>5</span>
                            </i>
                            <i className="bi bi-person-circle me-3 text-success fs-3"></i>
                        </div>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Header;
