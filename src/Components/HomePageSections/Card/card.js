import React from 'react';
import Card from 'react-bootstrap/Card'
import "./card.style.css";

export default function SmallCard(props) {
    return (
        <Card style={{ width: (props.width ? props.width : "22em"), borderColor: "white", float: props.float, display: 'block', margin: props.margin }} className="cairo-font single-card-home">
            <Card.Img className='card-image-home' src={props.iconPath} />
            <Card.Body>
                <Card.Title className='cairo-font'>{props.contentTitle}</Card.Title>
                <Card.Text className='cairo-font card-text-home'> {props.contentText}</Card.Text>
            </Card.Body>
        </Card>
    );
}