import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
import client from '../../asset/image/client-1.jpg'


class ClientReview extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed: 3000,
            vertical:true,
            verticalSwiping:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container className="text-center justify-content-center ">
                    <h1 className="serviceMainTitle">Testimonials</h1>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col md={6} sm={12}>
                                    <img className="circleImage" src={client}/>
                                    <h2 className="serviceName">Web Development</h2>
                                    <p className="serviceDescription">I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application.</p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col md={6} sm={12}>
                                    <img className="circleImage" src={client}/>
                                    <h2 className="serviceName">Web Development</h2>
                                    <p className="serviceDescription">I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col md={6} sm={12}>
                                    <img className="circleImage" src={client}/>
                                    <h2 className="serviceName">Web Development</h2>
                                    <p className="serviceDescription">I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application.</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;