import * as React from 'react';
import './services.homepage.style.css';
import SmallCard from '../Card/card';
import { CardsInfo } from './CardsInfo';
import { Col, Row, Container } from 'react-bootstrap';
let num = 0;

function renderCards(cardsInfo) {
    let cards = [];
    for(let i = 0; i < cardsInfo.length; i++) {
        num++;
        cards.push(
            <Col key={num} lg={6}>
                <SmallCard
                    iconPath={cardsInfo[i].iconPath}
                    contentTitle={cardsInfo[i].contentTitle}
                    contentText={cardsInfo[i].contentText}
                    className="card-services"
                />
            </Col>
        );
    }

    return cards;
}

export default function ServicesHome() {
    return (
        <>
            <h1 className='services-word'>Services</h1>
            <p className='services-description'>
                Garcia 1880 provides you with the best solutions to improve
                the daily lives of our elderly and people with mobility problems
            </p>
            <div className='services-cards'>
                <Container>
                    <Row>
                        {renderCards(CardsInfo)}
                    </Row>
                </Container>
            </div>
        </>
    );
}