import React, { useEffect, useState } from "react";
import { Button, Card, Container, Image } from "react-bootstrap";
import './invitation.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import weddingone from '../../assets/wedding1.png';
import background1 from '../../assets/backgound1.png';
import wedding3 from '../../assets/wedding.jpeg';
import Clock from "../../components/Clock/Clock";


function Invitation () {

    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

  const startTimer = () => {
    const countDownDate = new Date("9/9/2023 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
    
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
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                    >
                      <Card className="card-two">
                          <div style={{width: '75%'}}>
                              <h3 className="text-center description lh-1" style={{fontSize: 50}}>Save The Date</h3>
                              <h2 className="text-center fw-bold lh-1" style={{fontSize: 20}}>
                              Resepsi Pernikahan
                              </h2>
                              <p className="text-center fw-bold lh-1" style={{fontSize: 25}}>
                              Sabtu, 09 Desember 2023
                              </p>
                          </div>
                          
                          <Button className="btn-success mb-5">Buka Lokasi</Button>
                          <Clock
                                  timerDays={timerDays}
                                  timerHours={timerHours}
                                  timerMinutes={timerMinutes}
                                  timerSeconds={timerSeconds}
                              />   
                              
                      </Card>
                    </div>
                </div>
                
            </Container>
        
        </>
    )
}

export default Invitation;