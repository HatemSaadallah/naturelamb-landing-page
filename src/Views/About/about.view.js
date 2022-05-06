import React from "react";
import Navb from "../../Components/Navbar/navbar";
import BottomNav from "../../Components/BottomNavbar/bottomNav";
import ContactUsHome from '../../Components/HomePageSections/ContactUs/contactus.homepage.section';
import Slider from "../../Components/AboutUs/slider/Slider";

import './about.style.css';

export default function About() {
  return (
    <div>
      <div className="heade">
        <Navb color='white' imagePath="/images/aboutUs/ablogo.svg" selectedOption={2} />
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
          <img src="/images/aboutUs/Rectangle-15.png" className="char1"></img>
          <h4 className="subHeading1">Our history </h4>
          <h4 className="subHeading2">Lorem ipsum dolor sit amet, consetetur <br/> sadipscing elitr, sed diam nonumy eirmod <br/> tempor invidunt ut labore et dolore magna <br/> aliquyam erat, sed diam voluptua. At vero eos <br/> et accusam et justo duo dolores et ea rebum. <br/> Stet clita kasd gubergren, no sea takimata.</h4>
        </div>
        <img
          className="sha2"
          src="/images/aboutUs/secShape.svg"
          alt="Logo"
        />
        <div className="second-subContent">
          <h4 className="subHeading3">Our goal</h4>
          <h4 className="subHeading4">Lorem ipsum dolor sit amet, consetetur <br /> sadipscing elitr, sed diam nonumy eirmod <br /> tempor invidunt ut labore et dolore magna<br /> aliquyam erat, sed diam voluptua. At vero eos<br /> et accusam et justo duo dolores et ea rebum.<br /> Stet clita kasd gubergren, no sea takimata.</h4>
          <img
            src="/images/aboutUs/dylan-gillis-KdeqA3aTnBY-unsplash.png"
            className="char2"
          ></img>
        </div>
      </section>
      <section className="third-content">
        <img
          className="vid"
          src="/images/aboutUs/old.png">
        </img>
        
      </section>

      <section className="fourth-content">
          <div className="left-side">
              <img
                src="/images/aboutUs/pink-man.png"
                width='120px'
                height='120px'
                style={{marginLeft:'250px'}}
               />
               <img
                src="/images/aboutUs/Ova.png"
                width='100px'
                height='100px'
                style={{marginLeft:'56px',marginTop:'200px'}}
               />
               <img
                src="/images/aboutUs/Ov.png"
                width='120px'
                height='120px'
                style={{marginLeft:'250px',marginTop:'200px'}}
               />
          </div>
          <div className="centre-side">
            <img
                  src="/images/aboutUs/Heading.png"
                  width='640px'
                  height='200px'
                />

            <Slider />
           


          </div>
          <div className="right-side">
              <img
                src="/images/aboutUs/woman.png"
                width='100px'
                height='100px'
                style={{marginRight:'250px'}}
               />
               <img
                src="/images/aboutUs/pic.png"
                width='180px'
                height='180px'
                style={{marginLeft:'140px',marginTop:'160px'}}
               />
               <img
                src="/images/aboutUs/O.png"
                width='100px'
                height='100px'
                style={{marginRight:'250px',marginTop:'160px'}}
               />
          </div>

          
        
      </section>

      <section className="fifth-content">
        <div className='contact-home'>
            <ContactUsHome />
        </div>
        
      </section>

      <BottomNav />
    </div>
  );
}
