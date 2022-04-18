import { faClock, faHandHoldingMedical, faTrophy, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <div
                style={{ background: '#0077BB' }}
                className="fw-bold py-4  text-white">
                <Container>
                    <h2>About Us</h2>
                </Container>
            </div>
            <Container>
                <div className="text-center my-3">
                    <h1 className="my-3">MEET SHAMIM HOSEN</h1>
                    <h4 className="my-3">SAM FITNESS FOUNDER & PERSONAL TRAINER</h4>
                    <p className="px-5">There was a time where I felt uncomfortable in my clothes and my skin. I knew that I was carrying a little bit of extra weight compared to my friends around my age, and looking back now, it wasn't even that much. But it was enough at the time to knock my confidence - it got me down and I tried to diet.I didn't know what I was doing. I had no direction and without a plan, I made a lot of mistakes. I started to learn about nutrition and making slightly better food choices. I learned about training plans and making sure that the time I was spending in the gym was effective.</p>
                    <div>
                        
                    </div>
                </div>
                <div className="my-3">
                    <Row>
                        <Col md={3} sm={6}>
                            <div className='d-flex align-items-center'>
                                <div style={{ fontSize: '60px', marginRight: '8px' }}>
                                    <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h4>24563</h4>
                                    <span>HAPPY Patients</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className='d-flex align-items-center'>
                                <div style={{ fontSize: '60px', marginRight: '8px' }}>
                                    <FontAwesomeIcon icon={faTrophy}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h4>885</h4>
                                    <span>AWARDS Win</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className='d-flex align-items-center'>
                                <div style={{ fontSize: '60px', marginRight: '8px' }}>
                                    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h4>24/7</h4>
                                    <span>OPEN Hours</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className='d-flex align-items-center'>
                                <div style={{ fontSize: '60px', marginRight: '8px' }}>
                                    <FontAwesomeIcon icon={faHandHoldingMedical}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h4>17380</h4>
                                    <span>SUCCESSFUL Surgery</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default About;