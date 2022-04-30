import React from 'react';
import "./explorefeature.style.css";
// Import image from bootstrap
import { Image } from 'react-bootstrap';
export default function ExploreFeatures() {
    return (
        <div className='container-explore-card'>
            <Image
                src='/icons/arrow.png'
                className='explore-features-image'
            />
            <h2>What features you will Get from App</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
    );
}