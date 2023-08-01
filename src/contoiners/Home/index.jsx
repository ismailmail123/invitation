import React, { useState } from "react";
import { Button, Card, Col, Image, Row, Tab, Table, Tabs } from "react-bootstrap";

import avatar from '../../assets/avatar.jpg';
import DeleteConfirm from "../../components/Delete/deleteKonfirm";
import UpdateConfirm from "../../components/UpdateKonfirm/UpdateKonfirm";
import AddConfirm from "../../components/AddKonfirm/AddConfirm";
import { FaWhatsapp } from 'react-icons/fa';
import render  from 'react-dom';
import ReactWhatsapp from 'react-whatsapp';

function Home () {

    const [showConfirm, setShowConfirm] = useState();
    const [showUpdateConfirm, setShowUpdateConfirm] = useState();
    const [showAddConfirm, setShowAddConfirm] = useState();


    return(
        <>
        <DeleteConfirm
        show={showConfirm} onHide={() => setShowConfirm(false)}
        //  id={id}
        />
        <UpdateConfirm
        show={showUpdateConfirm} onHide={() => setShowUpdateConfirm(false)}
        //  id={id}
        />
        <AddConfirm
        show={showAddConfirm} onHide={() => setShowAddConfirm(false)}
        //  id={id}
        />
         <Row>
            <Col className="d-flex align-items-center justify-content-start">
            <   h3>Invitation</h3>
            </Col>
            <Col className="d-flex align-items-center justify-content-end" >
                <Button 
                className="w-50"
                onClick={()  => setShowAddConfirm(true)}
                >
                    <h4>+add</h4>
                </Button>
            </Col>
                  
        </Row>
        <Tabs
                defaultActiveKey="home"
                transition={false}
                className="mb-3 justify-content-center"
              >
                <Tab eventKey="Card" title="Card">
                    <Row className="mt-5">
                        <Col lg={3}>
                            <Card className="mt-3" >
                            <Row>
                                    <Col className="col-8">
                                        <Card.Title className="d-flex justify-content-end mt-2">Dear</Card.Title>
                                    </Col>
                                    <Col className="col-4">
                                        <ReactWhatsapp className="border-0 w-100" number="+6281242666024" message="Hello World!!!" > <FaWhatsapp className="w-10-3 text-success w-100" /> </ReactWhatsapp>
                                    </Col>
                                </Row>
                                <Card.Body>
                                    <Row className="d-flex">
                                        <a href="/invitation">
                                            <Image className="w-50 rounded mx-auto d-block" src={avatar} />
                                        </a> 
                                        <p className="fw-bold lh-1">Nama : Ismail</p>
                                        <p className="fw-bold lh-1">Alamat : Jl. Poros kariango</p>
                                        <p className="fw-bold lh-1">Ucapan</p>
                                        </Row>
                                </Card.Body>
                                <Card.Footer className="d-flex align-items-center justify-content-between">
                                    <button
                                    className="btn btn-outline-success "
                                    onClick={()  => setShowUpdateConfirm(true)}
                                    >
                                        Update
                                    </button>
                                    <button 
                                    className="btn btn-outline-danger "
                                    onClick={()  => setShowConfirm(true)}
                                    >Delete</button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        {/* <Col lg={3}>
                            <Card className="mt-3" >
                                <Row>
                                    <Col className="col-8">
                                        <Card.Title className="d-flex justify-content-end mt-2">Dear</Card.Title>
                                    </Col>
                                    <Col className="col-4">
                                        <button className="w-100 border-0">
                                            <FiSend className="w-100 fs-3"/>
                                            kirim
                                        </button>
                                    </Col>
                                </Row>
                                <Card.Body>
                                    <Row className="d-flex">
                                        <a href="/invitation">
                                            <Image className="w-50 rounded mx-auto d-block" src={avatar} />
                                        </a> 
                                        <p className="fw-bold lh-1">Nama : Ismail</p>
                                        <p className="fw-bold lh-1">Alamat : Jl. Poros kariango</p>
                                        <p className="fw-bold lh-1">Ucapan</p>
                                        </Row>
                                </Card.Body>
                                <Card.Footer className="d-flex align-items-center justify-content-between">
                                    <button
                                    className="btn btn-outline-success "
                                    onClick={()  => setShowUpdateConfirm(true)}
                                    >
                                        Update
                                    </button>
                                    <button 
                                    className="btn btn-outline-danger "
                                    onClick={()  => setShowConfirm(true)}
                                    >Delete</button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card className="mt-3" >
                                <Row>
                                    <Col className="col-8">
                                        <Card.Title className="d-flex justify-content-end mt-2">Dear</Card.Title>
                                    </Col>
                                    <Col className="col-4">
                                        <button className="w-100 border-0">
                                            <FiSend className="w-100 fs-3"/>
                                            kirim
                                        </button>
                                    </Col>
                                </Row>
                                
                                <Card.Body>
                                    <Row className="d-flex">
                                        <a href="/invitation">
                                            <Image className="w-50 rounded mx-auto d-block" src={avatar} />
                                        </a> 
                                        <p className="fw-bold lh-1">Nama : Ismail</p>
                                        <p className="fw-bold lh-1">Alamat : Jl. Poros kariango</p>
                                        <p className="fw-bold lh-1">Ucapan</p>
                                        </Row>
                                </Card.Body>
                                <Card.Footer className="d-flex align-items-center justify-content-between">
                                    <button
                                    className="btn btn-outline-success "
                                    onClick={()  => setShowUpdateConfirm(true)}
                                    >
                                        Update
                                    </button>
                                    <button 
                                    className="btn btn-outline-danger "
                                    onClick={()  => setShowConfirm(true)}
                                    >Delete</button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card className="mt-3" >
                                <Row>
                                    <Col className="col-8">
                                        <Card.Title className="d-flex justify-content-end mt-2">Dear</Card.Title>
                                    </Col>
                                    <Col className="col-4">
                                        <button className="w-100 border-0">
                                            <FiSend className="w-100 fs-3"/>
                                            kirim
                                        </button>
                                    </Col>
                                </Row>
                                <Card.Body>
                                    <Row className="d-flex">
                                        <a href="/invitation">
                                            <Image className="w-50 rounded mx-auto d-block" src={avatar} />
                                        </a> 
                                        <p className="fw-bold lh-1">Nama : Ismail</p>
                                        <p className="fw-bold lh-1">Alamat : Jl. Poros kariango</p>
                                        <p className="fw-bold lh-1">Ucapan</p>
                                        </Row>
                                </Card.Body>
                                <Card.Footer className="d-flex align-items-center justify-content-between">
                                    <button
                                    className="btn btn-outline-success "
                                    onClick={()  => setShowUpdateConfirm(true)}
                                    >
                                        Update
                                    </button>
                                    <button 
                                    className="btn btn-outline-danger "
                                    onClick={()  => setShowConfirm(true)}
                                    >Delete</button>
                                </Card.Footer>
                            </Card>
                        </Col>    */}
                    </Row>
                </Tab>
                <Tab eventKey="Table" title="Table">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>
              </Tabs>
        
        </>
       
        
    )
}

export default Home;