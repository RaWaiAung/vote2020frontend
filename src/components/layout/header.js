import React from 'react'
import { Layout } from 'antd';
import {
    Link,
} from "react-router-dom";
import './layout.css';
import { BarsOutlined } from '@ant-design/icons';
import $ from 'jquery';
const { Header } = Layout;

$(document).ready(function(){
    $(".btn").click(function(){
        $("ul").toggleClass("show")
    })
})

const WebsiteHeader = () => {
     return  <div className="container">
         <div className="menu-btn">
         <BarsOutlined  className="btn"/>
         </div>
        <div className="main-nav">
        <img src={require('./logo21.jpg')} />
        <ul className="main-menu">
            <li><Link  className="link" to="/state">တိုင်း / ပြည်နယ်အလိုက်ရှာရန်</Link></li>
            <li><Link  className="link" to="/district">ခရိုင်အလိုက်ရှာရန်</Link></li>
            <li><Link  className="link" to="/township">မြို့နယ်အလိုက်ရှာရန်</Link></li>
            <li><Link  className="link"  to="/voter-list">လွှတ်တော်အလိုက်ရှာရန်</Link></li>
            <li><Link   className="link" to="/candidate">ပါတီအလိုက်ရှာရန်</Link></li>
            <li><Link   className="link" to="/party">ကိုယ်စားလှယ်လောင်းများ</Link></li>
        </ul>
        </div>
     </div>
    
}
export default WebsiteHeader;