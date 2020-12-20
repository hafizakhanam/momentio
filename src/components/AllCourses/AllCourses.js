import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import course1 from "../../asset/image/course-1.jpg";
import course2 from "../../asset/image/course-2.jpg";
import course3 from "../../asset/image/course-3.jpg";
import course4 from "../../asset/image/course-4.jpg";
import {Link} from "react-router-dom";

class AllCourses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row>
                        <Col lg={6} md={12} className="courseWrapper">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={course1} />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify courseDes">It was popularised in the 1960s with the release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently with desktop publishing software like
                                        Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <Link className="text-justify courseDetails float-left" to="./categoryDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} className="courseWrapper">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={course2} />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify courseDes">It was popularised in the 1960s with the release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently with desktop publishing software like
                                        Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <Link className="text-justify courseDetails float-left" to="./categoryDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} className="courseWrapper">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={course3} />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify courseDes">It was popularised in the 1960s with the release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently with desktop publishing software like
                                        Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <Link className="text-justify courseDetails float-left" to="./categoryDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} className="courseWrapper">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={course4} />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify courseDes">It was popularised in the 1960s with the release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently with desktop publishing software like
                                        Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <Link className="text-justify courseDetails float-left" to="./categoryDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllCourses;