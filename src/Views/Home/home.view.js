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
                <Navb />
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

// import React from 'react';
// import Navb from "../../Components/Navbar/navbar";
// import SmallCard from "../../Components/Card/card";

// export default function Home() {
//     return (
//         <div>
//             <Navb />
//             <SmallCard iconPath="/icons/heart.png" contentTitle="Trust" contentText={
//                 `We are experts in our \n sector , we are always here to help and advise you.`
//             }
//             />
//             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
//             <SmallCard iconPath="/icons/Icon-Support.png" contentTitle="Tradition and engagement" contentText={
//                 `We are already the 5th generation taking care of our elders’ quality of life.`
//             }
//             />
//         </div>
//     );
// }