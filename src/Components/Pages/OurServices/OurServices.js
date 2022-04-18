import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../Hooks/useServices';
import Service from '../../Sheared/Service/Service';

const OurServices = () => {
    const { services } = useServices();
    return (
        <div>
            <div
                style={{ background: '#12C1AD' }}
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