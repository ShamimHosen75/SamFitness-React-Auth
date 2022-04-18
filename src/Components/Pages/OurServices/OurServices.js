import React from 'react';
import { Container, Row } from 'react-bootstrap';
import services from '../../../utilities/services';
import Service from '../../Sheared/Service/Service';

const OurServices = () => {
    return (
        <div>
            <div
                style={{ background: '#0077BB' }}
                className="fw-bold py-4  text-white">
                <Container>
                    <h2>Our Services</h2>
                </Container>
            </div>
            <Container>
                <Row className="g-4 my-3">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}>
                        </Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default OurServices;