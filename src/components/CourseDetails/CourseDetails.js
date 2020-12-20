import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";
import {Link} from "react-router-dom";

class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0" >
                    <div className="topPageOverlay">
                        <Container className="topPageContentCourse">
                            <Row>
                                <Col md={6} sm={12}>
                                    <h3>Product Short Info</h3>
                                    <h5>Total Product = 30</h5>
                                    <h5>Total Color = 3</h5>
                                </Col>
                                <Col md={6} sm={12}>
                                    <p>Even though we’ve grown and our service offerings have
                                        expanded since our origins in the 1970’s, we’re still simple gardeners and landscapers
                                        at heart. We have the experience, knowledge, and equipment to keep your property
                                        looking immaculate throughout the entire year.</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                <Container className="mt-5">
                    <Row>
                        <Col md={6} sm={12}>
                            <h3>Product Details</h3>
                            <ul>
                                <li>Color: White</li>
                                <li>Length: 42</li>
                            </ul>
                            <Button variant="primary">Buy Now</Button>
                        </Col>
                        <Col md={6} sm={12}>
                            <Player>
                                <source src="http://www.w3schools.com/html/mov_bbb.mp4"/>
                                <BigPlayButton position="center"></BigPlayButton>
                            </Player>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;