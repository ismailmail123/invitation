import React from 'react';
import {Form, Button, Col, Container, Row, InputGroup} from 'react-bootstrap';
import './FormEditCar.css'
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { update } from '../../redux/recipient/sliceRecipient';
import swal from "sweetalert";

const FormEditCar = () => {

    const URL = "https://invitation-lm0g.onrender.com"
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
      console.log('ini data di bagianupdate recipient', recipients.data)
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
                                                placeholder="Input Nama/Tipe Mobil"
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
                                                placeholder="Input Harga Sewa Mobil"
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
                                                placeholder="Input Harga Sewa Mobil"
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
                                <div className="formInfo">
                                    <Row className="mb-3">
                                        <Col sm="4" className="mb-0">
                                            Created at
                                        </Col>
                                        <Col sm="8">{formValues.createdAt}</Col>
                                    </Row>
                                    <Row>
                                        <Col sm="4" className="mb-0">
                                            Updated at
                                        </Col>
                                        <Col sm="8">{formValues.updatedAt}</Col>
                                    </Row>
                                </div>
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
        </Container>
    )
}

export default FormEditCar;