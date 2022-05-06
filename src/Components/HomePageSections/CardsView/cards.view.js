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
                    <img
                        src="images/home/features-icons/plus.png"
                        className="plus-icon"
                        alt=""
                    />
                    <img
                        src="images/home/features-icons/stroke13.png"
                        className="small-square-icon"
                        alt=""
                    />
                    <img
                        src="images/home/features-icons/small-circle.png"
                        className="small-circle-icon"
                        alt=""
                    />
                    <img
                        src="images/home/features-icons/stroke12.png"
                        className="small-square-icon2"
                        alt=""
                    />
                    <img
                        src="images/home/Path66.png"
                        className="path-image-bg-cards-home"
                        alt=""
                    />
                    <div className="small-card-div right">
                        <SmallCard float='right' iconPath="/icons/heart.png" contentTitle="Trust" contentText={
                            `We are experts in our \n sector , we are always here to help and advise you.`
                        }
                        />
                    </div>
                    <div className="small-card-div left special-card-home-div" >
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
                    <img className="semi-circle-home-cards-view" src="images/home/Ellipse8.png" alt="" />
                    <ExploreFeatures />
                </Col>
            </Row>
        </div>
    );
}