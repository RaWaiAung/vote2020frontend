import React from 'react'
import { Layout } from 'antd';
import  Header from  './header'
import  Navbar from  './nav'
import './layout.css'
import  Footer from  './footer';
import { BarsOutlined } from '@ant-design/icons';
import Routes from '../../router/route'
const { Content } = Layout;

const style = {

}
const WebsiteLayout = () => {
    return <Layout className="layout">
        <Header />
        {/* <Navbar /> */}
        <Content  className="back">
            <div>
                {/* <Routes/> */}
                <div className="lk">
                    <Routes />
                </div>
                </div>
        </Content>
        <Footer />
    </Layout>
}
export default WebsiteLayout;