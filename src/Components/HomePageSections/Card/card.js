import React from 'react';
import Card from 'react-bootstrap/Card'
import "./card.style.css";

export default function SmallCard(props){
    return(
        <Card style={{ width: (props.width ? props.width : "18em"),borderColor:"white", float:props.float, display: 'block', margin: props.margin}} className="cairo-font single-card-home">
            <Card.Img variant="top" src={props.iconPath} style={{width:85,height:85}} />
            <Card.Body>
                <Card.Title >{props.contentTitle}</Card.Title>
                <Card.Text > {props.contentText}</Card.Text>
            </Card.Body>
        </Card>
    );
}