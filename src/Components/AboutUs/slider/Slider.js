import React, { useState } from 'react';
import './slider.style.css'
import { sliderdata } from '../../../data/slider.data';



export default function Slider(){
    return(
        <div className='bod'>
            <div className="c c1" >
                <img src="/images/aboutUs/quote.svg" className="quo" />
                <h6 className="tex">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.</h6>
                <h6 className="nam">Rashed Ka.</h6>
            </div>
            <div className="c c2"></div>
            <div className="c c3"></div>
        </div>
    );
}