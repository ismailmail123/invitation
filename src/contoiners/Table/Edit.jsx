import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Edit (){

    const {id} = useParams();

    const [cards, setCards] = useState()
 
  const URL = "http://localhost:3000"
  const getCards = () => {
    axios({
      method: "GET",
      url: `${URL}/recipients/${id}`
    })
    .then(cards => {
      setCards(cards.data)
      console.log('ini data idnya', cards.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    getCards()
  },[])


    return (
        <div>{cards?.name}</div>
    )
}

export default Edit;