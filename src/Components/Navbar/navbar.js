import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React, { Component }  from 'react';


export default function Navb(){
    return(
            <Navbar >
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="/logo.png"
                            width="180"
                            height="45"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link style={{paddingLeft:20,paddingRight:20}} href="#home">Home</Nav.Link>
                            <Nav.Link style={{paddingLeft:20,paddingRight:20}} href="#link">Product</Nav.Link>
                            <Nav.Link style={{paddingLeft:20,paddingRight:20}} href="#link">About us</Nav.Link>
                            <Nav.Link style={{backgroundColor:"darkgreen",borderRadius:35,paddingLeft:20,paddingRight:20,color:"white"}} href="#link">Contact us</Nav.Link>
                            <Nav.Link style={{paddingLeft:80,paddingRight:20}} href="#link">(929)953-8315</Nav.Link>
                            <NavDropdown title="EN" id="collasible-nav-dropdown" style={{color:"green"}}>
                                <NavDropdown.Item href="#action/3.1">lang1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">lang2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">lang3</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );



}