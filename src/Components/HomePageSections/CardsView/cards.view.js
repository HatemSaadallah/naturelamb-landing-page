import * as React from "react";
import { Row, Col } from 'antd';
import SmallCard from "../Card/card";
import ExploreFeatures from "../ExploreFeatures/explorefeature.view";

import './cardsview.style.css';
export default function CardsView() {
    return (
        <div className="features-home-section">
            <Row>
                {/* Add two equal Cols */}
                <Col span={12}>
                    <div className="small-card-div right">
                        <SmallCard float='right' iconPath="/icons/heart.png" contentTitle="Trust" contentText={
                            `We are experts in our \n sector , we are always here to help and advise you.`
                        }
                        />
                    </div>
                    <div className="small-card-div left">
                        <SmallCard float="right" iconPath="/icons/Icon-Support.png" contentTitle="Tradition and engagement" contentText={
                            `We are already the 5th generation taking care of our elder' quality of life`
                        }
                        />
                    </div>
                    <div className="small-card-div right">
                        <SmallCard float='right' iconPath="/icons/shield.png" contentTitle="Safety" contentText={
                            `We are already the 5th generation taking care of our elder' quality of life`
                        }
                        />
                    </div>
                    <div className="small-card-div left">
                        <SmallCard float="right" iconPath="/icons/achivment.png" contentTitle="Quality" contentText={
                            `We are already the 5th generation taking care of our elder' quality of life`
                        }
                        />
                    </div>
                    <div className="small-card-div right">
                        <SmallCard float="right" iconPath="/icons/diamond.png" contentTitle="Involvement" contentText={
                            `We are already the 5th generation taking care of our elder' quality of life`
                        }
                        />
                    </div>
                </Col>
                <Col className="features-left-col" span={12}>
                    <img className="semi-circle-home" src="images/home/Ellipse8.png"  alt=""/>
                    <ExploreFeatures />
                </Col>
            </Row>
        </div>
    );
}