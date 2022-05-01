import * as React from 'react';
import Navb from "../../Components/Navbar/navbar";
import Slideshow from "../../Components/Slideshow/slideshow.component";
import ContactUsHome from '../../Components/HomePageSections/ContactUs/contactus.homepage.section';
import ButtomNav from '../../Components/ButtomNavbar/buttomNav';
export default function Products() {
    return (
        <>
            <Navb />
            <Slideshow />
            <ContactUsHome />
            <ButtomNav />
        </>
    );
}