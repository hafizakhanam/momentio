import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import project2 from "../../asset/image/project-2.png";

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img src={project2} />
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h2>Full Bazar</h2>
                            <p>Even though we’ve grown and our service offerings have
                                expanded since our origins in the 1970’s, we’re still simple gardeners and landscapers
                                at heart. We have the experience, knowledge, and equipment to keep your property
                                looking immaculate throughout the entire year.</p>
                            <ul>
                                <li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</li>
                                <li>In the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</li>
                                <li>Letraset sheets containing Lorem Ipsum passages</li>
                                <li>In the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</li>
                                <li>Letraset sheets containing Lorem Ipsum passages</li>
                                <li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</li>
                                <li>In the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</li>
                            </ul>
                            <Button variant="primary">More Info</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;