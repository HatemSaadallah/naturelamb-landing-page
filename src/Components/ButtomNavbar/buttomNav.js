import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from 'react';
import classes from "./buttomNav.style.css";


export default function ButtomNav(){
    return(
            <Navbar className="Na" >
                    <img className="ima" src="/images/main.png" alt="logo"/>
                    <Nav className="N" >
                        <Nav.Link className="nLink"  href="#home">Home</Nav.Link>
                        <Nav.Link className="nLink" href="#link">About us</Nav.Link>
                        <Nav.Link className="nLink"  href="#link">Contact us</Nav.Link>                            
                    </Nav>
                    <Nav.Link  className="cp">&copy; 2022 copyright </Nav.Link> 
            </Navbar>
    );



}