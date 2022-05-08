import * as React from 'react';
import { useParams } from 'react-router-dom'
import Navb from '../../Components/Navbar/navbar';
import BottomNav from "../../Components/BottomNavbar/bottomNav";
import ContactUsHome from '../../Components/HomePageSections/ContactUs/contactus.homepage.section';
import DetailsSlider from '../../Components/ProductDetails/product.details.slider'
import './product-details.style.css'
export default function ProductDetails(props) {
    const { id } = useParams()

    return (
        <div>
            <Navb />
            <div className='first-content'>
                <DetailsSlider id={id} />
            </div>


            <ContactUsHome />
            <BottomNav />
        </div>
    );
}