import * as React from 'react';
import { Row, Col } from 'antd';
import './products.homepage.style.css';

export default function ProductsHome() {
    return (
        <>
            <Row>
                <Col span={13}>

                </Col>
                <Col span={11}>
                    <p>Products</p>
                    <h1>Canes & Walking Sticks</h1>
                    <p className='products-text'>
                        Visit our walking sticks page to know our product with more 
                        history, we have a wide variety of colours, cuffs and materials.
                    </p>
                </Col>
            </Row>
        </>
    );
}