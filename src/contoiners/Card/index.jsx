import React from 'react';
import { InputGroup, Button, Form, Table, Image, Row, Col, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from'axios';
import ReactWhatsapp from 'react-whatsapp';
import avatar from '../../assets/avatar.jpg';
import { FaWhatsapp } from 'react-icons/fa';
import DeleteConfirm from "../../components/Delete/deleteKonfirm";
import LoadingCard from '../../components/LoadingCard/index';


const Navbar = () => {

  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [showConfirm, setShowConfirm] = useState();

  const {id} = useParams();
  const one = "Yth Kepada Bapak/Ibu/Saudara/i"
 
  const URL = "https://invitation-lm0g.onrender.com"
  const getCards = () => {
    axios({
      method: "GET",
      url: `${URL}/recipients`
    })
    .then(cards => {
      setCards(cards.data)
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
        <Row>
                    {
                      cards.length !== 0 ?
                      cards.map(recipient => {
                        return(
                            <>
                               
                            <Col lg={3} key={id}>
                                <Card className="mt-3" >
                                <Row>
                                        <Col className="col-8">
                                            <Card.Title className="d-flex justify-content-end mt-2">Dear</Card.Title>
                                        </Col>
                                        <Col className="col-4">
                                            <ReactWhatsapp className="border-0 w-100" number={recipient.phone} message={` ${one}
                                            ${recipient.name} untuk berkenan hadir diacara kami, berikut link lengkap acara kami :
                                            https://invitation-deta-riska.vercel.app/invitation/${recipient.id} 
                                             merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i 
                                             berkenan untuk hadir dan memberikan do'a restu`} > <FaWhatsapp className="w-10-3 text-success w-100" /> </ReactWhatsapp>
                                        </Col>
                                    </Row>
                                    <Card.Body>
                                        <Row className="d-flex">
                                            <button  className='border-0 bg-white' onClick={() => navigate(`/invitation/${recipient.id}`)}>
                                                <Image  className="w-50 rounded mx-auto d-block" src={avatar} />
                                            </button> 
                                            <p className="fw-bold lh-1">Nama : {recipient.name}</p>
                                            <p className="fw-bold lh-1">Alamat : {recipient.adress}</p>
                                            <p className="fw-bold lh-1">Ucapan : {recipient.say}</p>
                                            </Row>
                                    </Card.Body>
                                    
                                </Card>
                            </Col>
                            
                            </>
                            
                        )
                      }) : 
                      <>
                      <Row>
                        <Col lg={3}>
                          <LoadingCard />
                        </Col>
                        <Col lg={3}>
                          <LoadingCard />
                        </Col>
                        <Col lg={3}>
                          <LoadingCard />
                        </Col>
                        <Col lg={3}>
                          <LoadingCard />
                        </Col>
                      </Row>
                      </>
                     }
         </Row>        
    </div>
                    
                    
        
    ) 
}

export default Navbar;
