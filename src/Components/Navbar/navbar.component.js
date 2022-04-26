import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

export default function Navbar() {
    return (
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(3).fill(null).map((_, index) => ({
                key: String(index + 1),
                label: `nav ${index + 1}`,
            }))}
        />

    );
}