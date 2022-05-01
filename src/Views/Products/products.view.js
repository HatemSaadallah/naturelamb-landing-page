import * as React from 'react';
import Navb from "../../Components/Navbar/navbar";
import Slideshow from "../../Components/Slideshow/slideshow.component";
import ContactUsHome from '../../Components/HomePageSections/ContactUs/contactus.homepage.section';
import BottomNav from '../../Components/BottomNavbar/bottomNav';
export default function Products() {
    return (
        <>
            <Navb imagePath="/icons/logo.png" selectedOption={1}/>
            <Slideshow />
            <ContactUsHome />
            <BottomNav />
        </>
    );
}