import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class PrivacyDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12}>
                            <p className="serviceDescription">Even though we’ve grown and our service offerings have
                                expanded since our origins in the 1970’s, we’re still simple gardeners and landscapers
                                at heart. We have the experience, knowledge, and equipment to keep your property
                                looking immaculate throughout the entire year. You have to be dependable and
                                excellent at what you do to stay in business for as long as we have.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default PrivacyDescription;