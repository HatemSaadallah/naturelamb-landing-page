import React from 'react';
import Navb from "../../Components/Navbar/navbar";
import SmallCard from "../../Components/Card/card";


export default function Home() {
    return (
        <div>
            <Navb />

            <SmallCard iconPath="/icons/heart.png" contentTitle="Trust" contentText={
                `We are experts in our \n sector , we are always here to help and advise you.`
            }
            />

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <SmallCard iconPath="/icons/Icon-Support.png" contentTitle="Tradition and engagement" contentText={
                `We are already the 5th generation taking care of our elders’ quality of life.`
            }
            />

        </div>
    );
}