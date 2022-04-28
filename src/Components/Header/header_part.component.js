import * as React from 'react';
import { Row, Col, Image, Button } from 'antd';
import 'antd/dist/antd.css';
import './header_part.style.css';

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
                    <Image
                        // Make width 100%
                        style={{ width: '100%', height: '100%' }}
                        src="/public/images/header_image.jpg"
                        className='header-image'
                    />
                </Col>
            </Row>
        </>
    );
}

