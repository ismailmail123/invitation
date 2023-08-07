import React from 'react';
import { InputGroup, Button, Form, Table, Image, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from'axios';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsPencil } from 'react-icons/bs';

const Navbar = () => {

  const navigate = useNavigate();

  const [cards, setCards] = useState([]);


  

  const {id} = useParams();


 
  const URL = "https://invitation-lm0g.onrender.com"
  const getCards = () => {
    axios({
      method: "GET",
      url: `${URL}/recipients`
    })
    .then(cards => {
      setCards(cards.data)
      console.log('ini data tabelnya', cards)
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
        <div className='row w-100'>
            <div className=' p-3'>
            <Table striped>
                  <thead>
                    <tr className='text-center'>
                      <th>ID</th>
                      <th>Nama</th>
                      <th>Alamat</th>
                      <th>Telepon</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cards.length !== 0 ?
                      cards.map(card => {
                        return(
                          <tr className='text-center' key={card.id}>
                            <td>{card.id}</td>
                            <td>{card.name}</td>
                            <td>{card.adress}</td>
                            <td>{card.phone}</td>
                         
                            
                            <Row >
                              <div className='d-flex justify-content-end align-items-center'>
                                <button className='btn btn-outline-danger me-3' onClick={() => deleteHandler(+card.id)} > <RiDeleteBinLine /> </button>
                                <button className="btn btn-outline-primary" onClick={()=>navigate(`/edit/${card.id}`)}  > <BsPencil /></button>
                              </div>
                                
                              
                            </Row>
                          </tr>
                        )
                      }) : 
                      <p>there is no items</p>
                     }
                  </tbody>
                </Table>
                
            </div>
                        
        </div>
    </div>
                    
                    
        
    ) 
}

export default Navbar;