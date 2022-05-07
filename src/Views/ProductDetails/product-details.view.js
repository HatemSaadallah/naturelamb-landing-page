import * as React from 'react';
import { useParams } from 'react-router-dom'
import Navb from '../../Components/Navbar/navbar';
import BottomNav from "../../Components/BottomNavbar/bottomNav";
import ContactUsHome from '../../Components/HomePageSections/ContactUs/contactus.homepage.section';
export default function ProductDetails(props) {
    const { id } = useParams()
    
    return (
        <div>
            <Navb />
            <div className='first-content'>
                <div className='left-arrow'>

                </div>
                <div className='product-details'>
                    <div className='details'>

                    </div>
                    <div className='product-image'>

                    </div>

                </div>
                <div className='right-buttons'>

                </div>
            </div>


            <ContactUsHome />
            <BottomNav />
        </div>
    );
}