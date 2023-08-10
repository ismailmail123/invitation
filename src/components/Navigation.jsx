import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";


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
                        SEARCH ENGINE
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className=''>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                                
                          <Form className="d-flex">
                            <Form.Control
                              type="search"
                              placeholder="Search"
                              className="me-2"
                              aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                          </Form>
                        </Nav>
                                
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    ))}
    </>
  );
};
