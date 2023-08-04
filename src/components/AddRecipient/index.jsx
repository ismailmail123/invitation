import React from 'react';
import {Form, Button, Col, Container, Row, InputGroup} from 'react-bootstrap';
import './FormEditCard.css'
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { update } from '../../redux/recipient/sliceRecipient';
import swal from "sweetalert";

const FormEditCar = () => {

    const URL = "https://drab-lime-sea-urchin-gown.cyclic.app"
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const login = useSelector((state) => state.login);

    const [recipient, setRecipient] = useState();
    const [formValues, setFormValues] = useState({
        name: null,
        price: 0,
        image: "",
        category: null,
        
    });
    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const [phone, setPhone] = useState(0);
   

   
  const getData = () => {
    axios({
      method: "GET",
      url: `${URL}/recipients`
    })
    .then(recipients => {
      setRecipient(recipients.data)
      console.log('ini data di bagian add recipient', recipients.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    getData()
  },[])
const submitHendler = () => {
    axios({
      method: "POST",
      url: `${URL}/recipients`,
      data:{
        name,adress,phone
      }
    })
    .then(result => {
      console.log(result)
      getData()
      navigate('/')
    })
    .catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    getData()
  },[])



    return (
        <Container fluid className='p-0 m-0 containerEditCar'>
            <Row className="m-0">
                <h4 style={{marginLeft: "330px", height: "100%"}}>Add Recipient</h4>
                <Col xs="auto" className='colEditcar d-none d-md-block h-100'></Col>
            </Row>
            {/* <Form
            onSubmit={handleSubmit}
            >  */}
                <div className='car-container'>
                    <div className='row row-car'>
                        <div className="w-100 bg-white p-3">

                            <fieldset className='font-template w-100'>
                                <Form.Group
                                    className="mb-3"
                                    controlId="name"
                                    data-testid="wrapper-labelName">
                                    <Row>
                                        <Form.Label
                                            data-testid="label-Name"
                                            column
                                            sm="4"
                                            className="mb-0 d-flex align-items-center">
                                            Nama
                                            <span className="text-danger" data-testid="label-SpanName">
                                                *
                                            </span>
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control
                                                type="text"
                                                placeholder="Input Nama Anda"
                                                className='forminput'
                                                onChange={(e) => setName(e.target.value)} 
                                              />
                                                
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="price"
                                    data-testid="wrapper-labelPrice">
                                    <Row>
                                        <Form.Label
                                            data-testid="label-Price"
                                            column
                                            sm="4"
                                            className="mb-0 d-flex align-items-center">
                                            Alamat
                                            <span className="text-danger" data-testid="label-SpanPrice">
                                                *
                                            </span>
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control
                                                type="text"
                                                placeholder="Inputkan Alamat lengkap anda"
                                                className='forminput'
                                                onChange={(e) => setAdress(e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="price"
                                    data-testid="wrapper-labelPrice">
                                    <Row>
                                        <Form.Label
                                            data-testid="label-Price"
                                            column
                                            sm="4"
                                            className="mb-0 d-flex align-items-center">
                                            No. Hp
                                            <span className="text-danger" data-testid="label-SpanPrice">
                                                *
                                            </span>
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control
                                                type="number"
                                                placeholder="Inputkan No. Hp anda"
                                                className='forminput'
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="image"
                                    data-testid="wrapper-Photo">
                                </Form.Group>
                            </fieldset>
                        </div>
                        <div
                            className="d-flex"
                            style={{
                            marginTop: "40px"
                        }}>
                            <Button
                                className='d-flex align-items-center me-3 btnCancel'
                                onClick={() => navigate('/')}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className='d-flex align-items-center text-white btnSave'
                                onClick={() => submitHendler()}
                                >
                                Save
                            </Button>
                        </div>

                    </div>
                </div>
            {/* </Form> */}
            {/* <div className='col-6 d-flex justify-content-center p-2' style={{ height: '100vh' }}>
              <div className=' card p-3 w-100 d-flex justify-content-center'>
                <h3 className='mb-5'>Welcome to Binar Color Generator</h3>
                  <Form.Group className="mb-3">
                    <Form.Label>Nama</Form.Label>
                    <InputGroup className='mb-3'>
                      <Form.Control type="text" placeholder="Masukkan nama anda" onChange={(e) => 
                      setName(e.target.value)} />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Alamat</Form.Label>
                    <InputGroup className='mb-3'>
                      <Form.Control type="text" placeholder="Masukkan NIK anda" onChange={(e) => 
                      setAdress(e.target.value)}/>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>No. Hp</Form.Label>
                    <InputGroup className='mb-3'>
                      <Form.Control type="text" placeholder="jenis kelamin" onChange={(e) => 
                      setPhone(e.target.value)}/>
                    </InputGroup>
                  </Form.Group>
                  
                  <Button  variant="success" className='w-100' type='submit' onClick={() => submitHendler()} >Submit</Button>{' '}
              </div> 
            </div>             */}
        </Container>
    )
}

export default FormEditCar;