import React, { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import deletedId from './CarItem';
// import { remove } from "../../redux/ListCar/slice";
// import axios from "axios";

function AddConfirm(props) {
  const { 
    show,
    onHide,
    // id 
    } = props;
//   const dispatch = useDispatch();


//   const deletedCar = async (e) =>{
//     e.preventDefault();
//     try{
//         const response = await axios.delete(`https://api-car-rental.binaracademy.org/admin/car/${id}`, 
//         {
//             headers: {
//                 access_token: 
//                     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc"
//             }
//         }
//         );
//         dispatch(remove(response.data));
//         onHide();

//     }catch(error){
//         console.log("error >", error)
//     }
    
// }
const [formValues, setFormValues] = useState()


const handleSubmit = () => {

}

  return (
    <Modal show={show} onHide={onHide} >
    <Modal.Header className="border-0" closeButton />
      <Modal.Body>
        <div>
          <Card className="text-center border-0 d-flex justify-content-center align-items-center">
            <Card.Body>
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
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Alamat</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setFormValues({ ...formValues, alamat: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>No.Hp</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => {
                    setFormValues({ ...formValues, phone: e.target.value });
                  }}
                />
              </Form.Group>
              <Button
              variant="primary"
              type="submit"
              className="w-75 mb-3"
              // onClick={deletedCar}
              >
              Tambahkan
              </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Modal.Body>
    </Modal>
    
  );
}

export default AddConfirm;
