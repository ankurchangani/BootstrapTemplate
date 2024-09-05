import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const NavbarHeader = () => {
    return(
        <>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className='px-3 text-success'>Home</Nav.Link>
            <Nav.Link href="#link" className='px-3'>Destinations</Nav.Link>

            <NavDropdown title="Moliva Tours" id="basic-nav-dropdown" className='px-3'>
              <NavDropdown.Item href="#action/3.1">Tour packages</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Single tour</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className='px-3'>Travel Insight</Nav.Link>
            <Nav.Link href="#link" className='px-3'>Pages</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </>
    )
}

export default NavbarHeader