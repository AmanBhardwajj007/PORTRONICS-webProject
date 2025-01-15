import React from 'react'
import x1 from '../image/logo.png'

export default function Footer() {
  return (
    <>
    <footer className="footer">
        <div className="container">
            
            <div className="emailSec">
                <img src={x1} alt="" />
                <h1>Join The Club</h1>
                <span><input type="email" placeholder='Email'/><i class="ri-send-plane-fill"></i></span>
                <p>Subscribe today to hear about our newest offers, new products, collaborations, everything Portronics - Directly to your inbox.</p>
            </div>

            <div className="becomePart">
                <h1>Become Partner</h1>
                <div className="list">
                    <a href="#">Corporate Gifting</a><br/>
                    <a href="#">Become a Partner</a>
                </div>
            </div>

            <div className="aboutUs">
                <h1>About Us</h1>
                    <div className="list">
                        <a href="#">About Us</a><br/>
                        <a href="#">Blog</a><br/>
                        <a href="#">Warranty Policy</a><br/>
                        <a href="#">CSR Policy</a><br/>
                        <a href="#">Privacy Policy</a><br/>
                        <a href="#">Terms & Conditions</a><br/>
                        <a href="#">E-Waste Management</a>
                    </div>
            </div>

            <div className="helpDesk">
                <h1>Help Desk</h1>
                    <div className="list">
                        <a href="#">Support</a><br/>
                        <a href="#">Track Your Order</a><br/>
                        <a href="#">Warranty Registration</a><br/>
                        <a href="#">How to Claim Warranty</a>
                    </div>
            </div>

            <div className="followUs">
                <h1>Follow Us</h1>
                <div className="icons">
                    <i class="ri-facebook-fill"></i>
                    <i class="ri-twitter-x-fill"></i>
                    <i class="ri-linkedin-fill"></i>
                    <i class="ri-youtube-fill"></i>
                    <i class="ri-instagram-line"></i>
                </div>
                <div className="contactUs">
                    <h1>Contact Us</h1>
                    <a href="#">help@portronics.com</a><br/>
                    <a href="#">+91 9555-245-245</a>
                </div>
            </div><br/>
        </div>

        <div className="rightReservedSec">
            <p>©️ 2024 Portronics Digital Private Limited. All Rights Reserved.</p>
            <p>CIN - U74140DL2010PTC203767</p>
            <p>For Queries Contact us: Legal, Portronics Digital Private Limited, Vegas Business Tower, Unit No. - 1082 to 1088,</p>
            <p>Floor 10, Plot. - 6, Sector 14 Dwarka, Dwarka, New Delhi, Delhi 110075, India</p>
        </div>
    </footer>
    </>
  )
}