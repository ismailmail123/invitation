import React from "react";
import { Button, Col, Row, Tab, Tabs } from "react-bootstrap";
import './home.css'
import { useNavigate } from "react-router-dom";
import TableHome from '../Table/index';
import CardHome from '../Card/index';


function Home () {

    const navigate = useNavigate();

    return(
        <>
        <Row>
            <Col className="d-flex align-items-center justify-content-start">
            <   h3>Invitation</h3>
            </Col>
            <Col className="d-flex align-items-center justify-content-end" >
                <Button 
                className="w-50"
                onClick={() => navigate("/add")}
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
                    <CardHome />
                   
                </Tab>
                <Tab eventKey="Table" title="Table">
                <TableHome />
                 
                </Tab>
              </Tabs>
        </>
    )
}

export default Home;