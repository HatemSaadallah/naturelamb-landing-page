// import use state
import React, { useState } from 'react';
import  { Carousel, Button } from 'react-bootstrap';
import { slideshowdata } from './slideshow.data';
import './slideshow.style.css'
export default function Slideshow() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="slide-show">
            {slideshowdata.map(slide => (
                <Carousel.Item key={slide.id}>
                    <div className="slideshow-info">
                        <h2 >{ slide.title }</h2>
                        <Button variant="outline-success">Details</Button>{' '}
                    </div>
                    <img
                        src={slide.image}
                        alt={slide.title}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}