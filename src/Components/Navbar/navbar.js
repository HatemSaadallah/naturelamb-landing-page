import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import React from 'react';

export default function Navb(props){
    return(
            <Navbar className="Nb">
                    <Navbar.Brand href="/" style={{marginLeft:'85px'}}>
                        <img
                            src={props.imagePath}
                            width="142.38"
                            height="24.04"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="nava" >
                            <Nav.Link style={{paddingLeft:20,paddingRight:20}} href="/" className="nlink">Home</Nav.Link>
                            <Nav.Link style={{paddingLeft:20,paddingRight:20}} href="/products" className="nlink">Product</Nav.Link>
                            <Nav.Link style={{paddingLeft:20,paddingRight:20}} href="/about" className="nlink" >About us</Nav.Link>
                            <Nav.Link style={{backgroundColor:"darkgreen",borderRadius:35,paddingLeft:20,paddingRight:20,color:"white"}} href="/contact">Contact us</Nav.Link>
                            <Nav.Link style={{paddingLeft:80,paddingRight:20}} href="#link">(929)953-8315</Nav.Link>
                            <NavDropdown title="EN" id="basic-nav-dropdown" style={{color:'white'}}>
                                <NavDropdown.Item href="#action/3.1">RU</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">FR</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">AR</NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
    );



}