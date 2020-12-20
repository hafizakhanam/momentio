import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class RefundDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12}>
                            <ul>
                                <li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</li>
                                <li>In the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</li>
                                <li>Letraset sheets containing Lorem Ipsum passages</li>
                                <li>In the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</li>
                                <li>Letraset sheets containing Lorem Ipsum passages</li>
                                <li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</li>
                                <li>In the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RefundDescription;