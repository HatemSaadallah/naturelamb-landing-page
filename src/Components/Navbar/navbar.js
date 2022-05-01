import * as React from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import './navbar.style.css';

function navOptions(selectedOption){
    return(
        <>
            <Nav.Link href="/" className={"nlink " + (selectedOption === 0 ? "selected-button-navbar" : "") }>Home</Nav.Link>
            <Nav.Link href="/products" className={"nlink " + (selectedOption === 1 ? "selected-button-navbar" : "") }>Product</Nav.Link>
            <Nav.Link href="/about" className={"nlink " + (selectedOption === 2 ? "selected-button-navbar" : "") } >About us</Nav.Link>
            <Nav.Link className={"nlink " + (selectedOption === 3 ? "selected-button-navbar" : "") }  href="/contact">Contact us</Nav.Link>
        </>
    )
}

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
                    <Nav className="nava">
                        {navOptions(props.selectedOption)}
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