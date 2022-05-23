import React from 'react';
import './layout.css'
import { FacebookFilled , YoutubeFilled , WhatsAppOutlined , TwitterCircleFilled , InstagramOutlined, LinkedinFilled} from '@ant-design/icons';


export default function Footer() {
    return (
        <div>
            <div className="upper-line">
            <div className="base-line">
                <div className="links">
                    <ul>
                        <li><h5>မာတိကာ</h5></li>
                        <li>တိုင်း / ပြည်နယ်အလိုက်ရှာရန်</li>
                        <li>ခရိုင်အလိုက်ရှာရန်</li>
                        <li>မြို့နယ်အလိုက်ရှာရန်</li>
                        <li>လွှတ်တော်အလိုက်ရှာရန်</li>
                        <li>ပါတီအလိုက်ရှာရန်</li>
                        <li>ကိုယ်စားလှယ်လောင်းများ</li>
                    </ul>
                </div>
                <div className="links">
                    <ul>
                        <li><h5>ဆက်သွယ်ရန်လိပ်စာ</h5></li>
                        <li>စစ်ကိုင်းတိုင်း  မုံရွာမြို့ , ဗိုလ်ချုပ်အောင်ဆန်းလမ်း</li>
                        <li>Tel: 09-963008479</li>
                        <li>Mail: ucsmonywa2018@gmail.com</li>
                        <li>Website: www.ucsmonywa.edu.mm</li>
                    </ul>
                </div>
                <div className="links">
                    <ul>
                    <li><h5>Follow US</h5></li>
                    <li className="page">
                        <a href="https://facebook.com">
                            <FacebookFilled  className="linked"/>
                        </a>                
                        <a href="">
                            <LinkedinFilled className="linked"/>
                        </a>                               
                        <a href="https://twitter.com">
                            <TwitterCircleFilled className="twitter" />
                        </a>  
                        <a href="https://youtube.com">
                            <YoutubeFilled  className="youtube"/>  
                        </a>
                        <a href="https://whatapps.com">
                            <WhatsAppOutlined className="what" />
                        </a>  
                    </li>
                </ul>
                </div>
                <div className="links">
                    <ul>
                    <li><a href="#">Contact Team</a></li>
                    <li><a href="#">Privacy & cookies</a></li>
                    <li><a href="#">Terms of use</a></li>
                    <li><a href="#">Trademarks</a></li>
                    </ul>
                </div>
        </div>
                   
      <div  className="subFooter">
            <p>Presented by</p>
            <img src={require('./cropped-monywanewlogo.png')} />
      </div>

      <div  className="sub-footer">
            <div><p>Copyright @ 2020 University  Of Computer Studies , Monywa .</p></div>
      </div>

  </div>
      </div>
    );
  }

