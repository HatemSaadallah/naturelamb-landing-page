import * as React from 'react';
import { Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import './header_part.style.css';
// Import Image from react bootstrap
import { Image } from 'react-bootstrap';
let HeaderImage = 'images/header-image.png';
export default function HeaderPart() {
    return (
        <>
            <Row>
                {/* Add two equal Cols */}
                <Col span={12}>
                    <div className='div-welcome-text'>
                        <h1 className='welcome-text'>At Naturlamb 1880 we are committed to improving your quality of life</h1>
                        <p>therefore with our new range of Sports Orthopedics, we help you recover from injuries and regain mobility as quickly as possible</p>
                        {/* change color */}
                        <Button type='primary' className='button-round' >
                            Contact Us
                        </Button>
                    </div>
                </Col>
                <Col span={12}>
                    <div className='image-div'>
                        <Image
                            // Make width 100%
                            // style={{ width: '70%', height: '100%' }}
                            src={HeaderImage}
                            className='header-image'
                        />
                    </div>
                </Col>
            </Row>
        </>
    );
}

