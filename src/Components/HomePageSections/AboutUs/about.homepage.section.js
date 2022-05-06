import * as React from 'react';
import { Row, Col } from 'antd';
import { Button } from 'react-bootstrap';
import './about.homepage.style.css';
import { useNavigate } from "react-router-dom";


export default function AboutUsHome() {
    const navigate = useNavigate();
    function goToAbout() {
        navigate('/about');
    }
    return (
        <>
            <Row className="about-home-section">
                <img src='/images/home/about-us-icons/left.png' alt='' className='semi-circle-home-left' />
                <Col span={11} className="about-us-home-section">
                    <p className="about-us-home-word">About us</p>
                    <h2 className="about-us-home-title">Naturlamb 1880 (history)</h2>
                    <p className='info-sec'>
                        García 1880, as the trademark of Sucesores de Manuel García,
                        S.L. is a family business created in 1880. It was born as a
                        company dedicated to the manufacture of tool handles for
                        working the fields and sticks for shepherds.
                    </p>
                    <p className='info-sec'>
                        In 1945, Manuel García Martínez Jr. joined the management of the company. His work throughout these post-war years was vital for the subsequent development of the company. He searched for new work formulas and began to mechanize the manufacturing process. In 1980 his children continued to manage the business.
                    </p>
                    <Button onClick={goToAbout} className="about-us-home-button" variant="success">{'About Us>'} </Button>{' '}

                </Col>
                <Col span={13} className="about-us-home-right-section">
                    <img className="about-bg-image" src="/images/home/Path12.png" alt='' />
                    <img src='/images/home/about-us-icons/side-bg-shape.png' alt='' className='weird-image-right-about-us-home' />
                    <img src='/images/home/about-us-icons/green-rect.png' alt='' className='green-rect-right-about-us-home' />
                    <img src='/images/home/about-us-icons/old-people.png' alt='' className='old-people-right-about-us-home' />
                </Col>
                <img src='/images/home/about-us-icons/right.png' alt='' className='semi-circle-home' />
            </Row>
        </>
    );
}