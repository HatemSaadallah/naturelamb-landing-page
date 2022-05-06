import { Nav, Navbar } from "react-bootstrap";
import React from 'react';
import './bottomNav.style.css';

export default function BottomNav(props) {
    return (
        <Navbar className="Na" >
            <img className="ima" src="/images/main.png" alt="logo" />
            <Nav className="N" >
                <Nav.Link style={{ color: props.color }} className="nLink" href="/">Home</Nav.Link>
                <Nav.Link className="nLink" href="#link">About us</Nav.Link>
                <Nav.Link className="nLink" href="#link">Contact us</Nav.Link>
            </Nav>
            <Nav.Link className="cp">&copy; 2022 copyright </Nav.Link>
        </Navbar>
    );
}