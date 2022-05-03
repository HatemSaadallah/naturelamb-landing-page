import * as React from 'react';
import './contactus.homepage.style.css';
import { Button } from 'react-bootstrap';
export default function ContactUsHome() {
    return (
        <div className='contactus-home-background'>
            <div className='contactus-home'>
                <h2 className='first-aboutus-home'>Do you have any projects?</h2>
                <h2 className='second-aboutus-home'>Contact us.</h2>
                <Button href='/contact' className='contactus-home-button' variant="outline-light">Contact Us</Button>
            </div>
        </div>
    );
}