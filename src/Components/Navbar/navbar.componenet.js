import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;
export default function Navbar() {
    return (
        <Layout>
            <Header
                style={{
                    zIndex: 1,
                    width: '100%',
                }}
            >
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(3).fill(null).map((_, index) => ({
                        key: String(index + 1),
                        label: `nav ${index + 1}`,
                    }))}
                />
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
    );
}