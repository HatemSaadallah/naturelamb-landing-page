import React, { useState } from 'react';
import  { Carousel, Button, Col, Row, Container } from 'react-bootstrap';
import { slideshowdata } from '../../data/slideshow.data';
import './slideshow.style.css'

export default function Slideshow() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} className="slide-show">
            {slideshowdata.map(slide => (
                <Carousel.Item key={slide.id}>
                <Container>
            <Row>
                <Col sm={4}>
                    <div className="slideshow-info">
                        <h2 >{ slide.title }</h2>
                        <Button variant="outline-success">Details</Button>{' '}
                    </div>
                </Col>
                <Col sm={6}>
                    <img
                        src={slide.image}
                        alt={slide.title}
                    />
                </Col>
                <Col sm={2}>
                    <Container>
                        <Row>
                            <Col sm={8}>
                                <p className='color-available'>Colors Available</p  >
                            </Col>
                            <Col sm={4}>
                                <img 
                                    src='images/products/circles/circle1.png'
                                    alt='circle1'
                                />
                            </Col>
                        </Row>    
                    </Container>
                    
                    
                </Col>
            </Row>
            </Container>
                    
                    
                </Carousel.Item>
            ))}
        </Carousel>
    );
}