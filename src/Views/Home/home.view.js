import React from 'react';
import Navb from "../../Components/Navbar/navbar";
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './home.style.css';
import HeaderPart from "../../Components/HomePageSections/Header/header_part.component";
import CardsView from '../../Components/HomePageSections/CardsView/cards.view';
import AboutUsHome from '../../Components/HomePageSections/AboutUs/about.homepage.section';
import ProductsHome from '../../Components/HomePageSections/Products/products.homepage.section';
import ServicesHome from '../../Components/HomePageSections/Services/services.homepage.section';
import QualityHome from '../../Components/HomePageSections/QualityPolicy/quality.homepage.section';
import ContactUsHome from '../../Components/HomePageSections/ContactUs/contactus.homepage.section';
import BottomNav from '../../Components/BottomNavbar/bottomNav';
const { Content } = Layout;

export default function Home() {
    return (
        
        <div>
            <Navb imagePath="/icons/logo.png" selectedOption={0} />
            <div className='stupid-color'></div>
            {/* Change layout background color */}
            <Layout className="home-page-layout">
                
                <Content
                    className="site-layout"
                    style={{
                        marginTop: 64,
                    }}
                >
                    <HeaderPart />
                    <br /> <br /> <br />
                    <div className='cards-view'>
                        <CardsView />
                    </div>
                    <br /> <br /> <br />
                    <div className='about-us-home'>
                        <AboutUsHome />
                    </div>
                    <br /> <br /> <br />
                    <div className='products-home'>
                        <ProductsHome />
                    </div>
                    <br /> <br /> <br />
                    <div className='services-home'>
                        <ServicesHome />
                    </div>
                    <br /> <br /> <br />
                    <div className='quality-home'>
                        <QualityHome />
                    </div>
                    <br /> <br /> <br />
                    <div className='contact-home'>
                        <ContactUsHome />
                    </div>
                    
                </Content>
                <BottomNav />
            </Layout>
        </div>
    );
}
