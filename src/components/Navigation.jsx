import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";


export const Navigation = () => {


  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
            <Container fluid>
                <marquee className = 'fw-bold color-success' style={{width: '60%'}}>Invitation for my Family
                </marquee>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        BCR
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className=''>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                                
                        <Nav.Link href="#services">Our Services</Nav.Link>
                        <Nav.Link href="#Why Us">Why Us</Nav.Link>
                        <Nav.Link href="#Testimonial">Testimonial</Nav.Link>
                        <Nav.Link href="#FAQ">FAQ</Nav.Link>
                        </Nav>
                                
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    ))}
    </>
  );
};
