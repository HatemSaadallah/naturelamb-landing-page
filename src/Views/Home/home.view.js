import React from 'react';
import Navb from "../../Components/Navbar/navbar";

import { Layout } from 'antd';
import 'antd/dist/antd.css';
import HeaderPart from "../../Components/HomePageSections/Header/header_part.component";
import CardsView from '../../Components/HomePageSections/CardsView/cards.view';
import AboutUsHome from '../../Components/HomePageSections/AboutUs/about.homepage.section';
const { Content, Footer } = Layout;
import SmallCard from "../../Components/Card/card";

export default function Home() {
    return (
        <div>

            {/* Change layout background color */}
            <Layout style={{ backgroundColor: '#fff' }}>
                <Navb />
                <Content
                    className="site-layout"
                    style={{
                        padding: '0 50px',
                        marginTop: 64,
                    }}
                >
                    {/* <div className="site-layout-background"> */}
                    <HeaderPart />
                    {/* </div> */}
                    <br /> <br /> <br />
                    <div className='cards-view'>
                        <CardsView />
                    </div>
                    <br /> <br /> <br />
                    <div className='about-us'>
                        <AboutUsHome />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                        backgroundColor: '#fff',
                    }}
                >
                </Footer>
            </Layout>
        </div>
    );
}
