import React from 'react'
import '../css/index.css'
import logo from '../image/logo.png'

export default function Nav() {
  return (
    <>
        <div className="pNav">
            <div className="cNav">
            <div className="logo">
                <a href="#"><img src={logo} alt="Logo here" /></a>
            </div>
            <div className="navList">
                <ul>
                    <a href="#" className='cate'><li>Categories</li><i class="ri-arrow-down-s-line"></i></a>
                    <a href="#"><li>New Arrivals</li></a>
                    <a href="#"><li>Daily Deals</li></a>
                    <a href="#"><li>Corporate Gifting</li></a>
                    <a href="#"><li>Support</li></a>
                </ul>
            </div>
            <div className="navIcon">
                <a href="#" className='one'><i class="ri-search-2-line"></i></a>
                <a href="#" className='two'><i class="ri-shopping-cart-2-line"></i></a>
                <a href="#" className='three'><i class="ri-user-line"></i></a>
                <a href="#" className='four'><i class="ri-menu-line"></i></a>
            </div>
            </div>
        </div>
    </>
  )
}
