import React from 'react';
import Navb from '../../Components/Navbar/navbar';
import './about.style.css';
export default function About() {
    return (
        <div>
            <Navb/>
            <div className="aboutus">

                <h2>About Us</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod, urna eu tincidunt consectetur,
                    nisi nisi ultricies erat, eget porttitor nisl nisl eu
                </p>
            </div>
        </div>
        
    );
}