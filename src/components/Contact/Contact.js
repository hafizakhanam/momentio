import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">Quick Connect</h2>

                            <Form>
                                <Form.Group controlId="name">
                                    <Form.Label className="serviceDescription">Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label className="serviceDescription">Email address</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>
                                <Form.Group controlId="message">
                                    <Form.Label className="serviceDescription">Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">Discuss Now</h2>
                            <p className="serviceDescription">920 Stonehaven Road SW Calgary, Alberta T2W 0P6<br/>
                                <a href="#" className="socialLink"><FontAwesomeIcon icon={faEnvelope} /> info@abc.ca</a><br/>
                                <a href="#" className="socialLink"><FontAwesomeIcon icon={faPhone} /> 01710-000000</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Contact;