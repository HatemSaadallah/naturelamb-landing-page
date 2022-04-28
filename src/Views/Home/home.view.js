import React from 'react';
import Navb from "../../Components/Navbar/navbar";
import SmallCard from "../../Components/Card/card";
import Navbar from "../../Components/Navbar/navbar.component";
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import HeaderPart from "../../Components/Header/header_part.component";
const { Header, Content, Footer } = Layout;

export default function Home() {
    return (
        <div>
            <Layout>
                <Header
                    style={{
                        zIndex: 1,
                        width: '100%',
                    }}
                >
                    <div className="logo" />
                    <Navbar />
                </Header>
                <Content
                    className="site-layout"
                    style={{
                        padding: '0 50px',
                        marginTop: 64,
                    }}
                >
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 380,
                        }}
                    >
                        <HeaderPart />
                        Content
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                </Footer>
            </Layout>
        </div>
    );
}