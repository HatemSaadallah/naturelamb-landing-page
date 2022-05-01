import React from "react";
import Navb from "../../Components/Navbar/navbar";
import './about.style.css';

export default function About() {
  return (
    <div>
      <div className="heade">
        <Navb imagePath="/images/aboutUs/ablogo.svg" selectedOption={2} />
        <h1 className="heading">About</h1>
        <br></br>
        <img
          className="sha"
          src="/images/aboutUs/Shape-Radial.svg"
          alt="Logo"
        />
        <img className="dots" src="/images/aboutUs/dots.svg" alt="Logo" />
      </div>
      <section className="second-content">
        <div className="first-subContent">
          {/* <img src="/images/aboutUs/Rectangle-15.png" className="char1"></img> */}
          <h4 className="subHeading1">Our history</h4>
        </div>
        <div className="second-subContent">
        {/* <img
          src="/images/aboutUs/dylan-gillis-KdeqA3aTnBY-unsplash.png"
          className="char2"
        ></img> */}
        <h4 className="subHeading2">Our goal</h4>
        </div>
      </section>
    </div>
  );
}
