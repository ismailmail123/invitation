import React from "react";
import { Button, Card, Container, Image } from "react-bootstrap";

import wedding3 from '../../assets/wedding.jpeg';
import './invitationHome.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useNavigate } from "react-router";
// ..
AOS.init();

function InvitationHome () {

    const navigate = useNavigate();

    return (
        <>
        <div 
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        >
            <Container>
                <Card className="mt-3 mb-3 border-0" style={{height: '100vh'}}>
                    <h4 className="invitation-text">Terima kasih telah mengunjungi undangan kami kami harapkan kedatangan bapak ibu</h4> 
                    <div className="invitation-card">
                        <Image className="invitation-image"  src={wedding3} />
                    </div>
                    <h4 className="text-center" >Kepada Bapak/Ibu </h4>
                    <h4 className="text-center" >Budi</h4>
                    <p className="text-center mt-3">
                        Tanpa Mengurangi Rasa Hormat, Kami Mengundang Bapak/Ibu/Saudara/i untuk Hadir di Acara Kami.
                    </p>
                    <div className="d-flex justify-content-center ">
                        <Button className="invitation-button mt-3" onClick={() => navigate('/visited')} >Buka Undangan Anda</Button>
                    </div>
                </Card>
            </Container>
        </div>
        </>
       
       
    )
}

export default InvitationHome;