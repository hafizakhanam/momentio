import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone, faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons"


class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footer text-center">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h2 className="serviceName">Follow</h2>
                            <p><a href="#" className="socialLink"><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br/>
                                <a href="#" className="socialLink"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h2 className="serviceName">Address</h2>
                            <p className="serviceDescription">920 Stonehaven Road SW Calgary, Alberta T2W 0P6<br/>
                                <a href="#" className="socialLink"><FontAwesomeIcon icon={faEnvelope} /> info@abc.ca</a><br/>
                                <a href="#" className="socialLink"><FontAwesomeIcon icon={faPhone} /> 01710-000000</a>
                            </p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h2 className="serviceName">Information</h2>
                            <p className="serviceDescription"><a href="#" className="footerLink">About</a><br/>
                                <a href="#" className="footerLink">Project</a><br/>
                                <a href="#" className="footerLink">Contact</a><br/></p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h2 className="serviceName">Legal</h2>
                            <p className="serviceDescription"><a href="#" className="footerLink">Terms & Conditions</a><br/>
                                <a href="#" className="footerLink">Privacy Policy</a></p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center copyright">
                    <a href="#" className="copyrightLink">abc.com &copy; 2020-2021</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;