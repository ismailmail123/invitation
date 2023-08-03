import React from 'react';
import { InputGroup, Button, Form, Table, Image, Row, Col, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from'axios';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsPencil } from 'react-icons/bs';
import ReactWhatsapp from 'react-whatsapp';
import avatar from '../../assets/avatar.jpg';
import { FaWhatsapp } from 'react-icons/fa';
import DeleteConfirm from "../../components/Delete/deleteKonfirm";
import UpdateConfirm from "../../components/UpdateKonfirm/UpdateKonfirm";
import AddConfirm from "../../components/AddKonfirm/AddConfirm";


const Navbar = () => {

  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [showConfirm, setShowConfirm] = useState();
const [showUpdateConfirm, setShowUpdateConfirm] = useState(); 

  const {id} = useParams();


 
  const URL = "http://localhost:3000"
  const getCards = () => {
    axios({
      method: "GET",
      url: `${URL}/recipients`
    })
    .then(cards => {
      setCards(cards.data)
      console.log('ini data', cards)
    })
    .catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    getCards()
  },[])

  

  const deleteHandler = (id) => {
    axios({
      method: "DELETE",
      url: `${URL}/recipients/${id}`
    })
    .then(result => {
      console.log(`Data berhasil dihapus ${result}`)
      getCards()
    })
    .catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    getCards()
  },[])

  const updateHandler = (id) => {
    axios({
      method: "PUT",
      url: `${URL}/cards/${id}`
    })
    .then(result => {
      console.log(`Data berhasil diupdate ${result}`)
      getCards()
    })
    .catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    getCards()
  },[])


    return (
      <div className='container-fluid p-3 ' style={{ height: '100%' }}>
        <DeleteConfirm
        show={showConfirm} onHide={() => setShowConfirm(false)}
         id={id}
        />
        <UpdateConfirm
        show={showUpdateConfirm} onHide={() => setShowUpdateConfirm(false)}
         id={id}
        />
       
        <Row>
                    {
                      cards.length !== 0 ?
                      cards.map(recipient => {
                        return(
                            <>
                               
                            <Col lg={3} key={recipient.id}>
                                <Card className="mt-3" >
                                <Row>
                                        <Col className="col-8">
                                            <Card.Title className="d-flex justify-content-end mt-2">Dear</Card.Title>
                                        </Col>
                                        <Col className="col-4">
                                            <ReactWhatsapp className="border-0 w-100" number={recipient.phone} message={`https://invitation-deta-riska-hyiseycsb-ismailmail123.vercel.app/invitation/${recipient.id}`} > <FaWhatsapp className="w-10-3 text-success w-100" /> </ReactWhatsapp>
                                        </Col>
                                    </Row>
                                    <Card.Body>
                                        <Row className="d-flex">
                                            <button className='border-0' onClick={() => navigate(`/invitation/${recipient.id}`)}>
                                                <Image className="w-50 rounded mx-auto d-block" src={avatar} />
                                            </button> 
                                            <p className="fw-bold lh-1">Nama : {recipient.name}</p>
                                            <p className="fw-bold lh-1">Alamat : {recipient.adress}</p>
                                            <p className="fw-bold lh-1">Ucapan : {recipient.say}</p>
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
                            
                            </>
                            
                        )
                      }) : 
                      <p>there is no items</p>
                     }
         </Row>        
    </div>
                    
                    
        
    ) 
}

export default Navbar;