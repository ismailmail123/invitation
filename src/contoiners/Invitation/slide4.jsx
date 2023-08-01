import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import './invitation.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import weddingone from '../../assets/wedding1.png';
import background1 from '../../assets/backgound1.png';
import cip from '../../assets/cip.jpg';
import mandiri from '../../assets/mandiri1.png';


function Invitation () {

  const [formValues, setFormValues] = useState()


  const handleSubmit = () => {

  }
    return (
        <>
        
            <Container 
                className="d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${weddingone})`,
                    backgroundSize: 'cover'
                }}
            >
                <div className="cardslide1"
                    style={{
                        backgroundImage: `url(${background1})`,
                        backgroundSize: 'cover'
                    }}
                >
                  <div 
          
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="25"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                  >
                      <Card className="card-two">
                          <div style={{width: '85%'}}>
                              <p className="text-center description lh-1" style={{fontSize: 40}}>Kehadiran</p>
                          </div>
                          <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Nama</Form.Label>
                              <Form.Control
                                type="text"
                                onChange={(e) => {
                                  setFormValues({ ...formValues, name: e.target.value });
                                }}
                              />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                              <label className="form-label">Ucapana</label>
                              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                              
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                              <label className="form-label">Kehadiran</label>
                              <Form.Select >
                                <option>-</option>
                                <option>Hadir</option>
                                <option>Tidak hadir</option>
                              </Form.Select>
                            </Form.Group>
                            <Button
                              variant="primary"
                              type="submit"
                              className="w-100 mb-3"
                            >
                            Kirim
                            </Button>
                          </Form>
                      </Card>
                  </div>
                </div>
                
            </Container>
        
        </>
    )
}

export default Invitation;