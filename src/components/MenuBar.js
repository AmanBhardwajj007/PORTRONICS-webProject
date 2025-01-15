import React from 'react'
import '../css/index.css'

export default function MenuBar() {
  return (
    <>
        <div className="mainBar">
            <div className="cBar">
                <div className="home">
                    <i class="ri-home-4-line"></i>
                    <p>Home</p>
                </div>
                <div className="line"></div>

                <div className="deals">
                    <i class="ri-discount-percent-line"></i>
                    <p>Deals</p>
                </div>
                <div className="line"></div>

                <div className="cate">
                    <i class="ri-gallery-view-2"></i>
                    <p>Categories</p>
                </div>
                <div className="line"></div>

                <div className="login">
                    <i class="ri-user-line"></i>
                    <p>Log in</p>
                </div>
                <div className="line"></div>

                <div className="cart">
                    <i class="ri-shopping-cart-2-line"></i>
                    <p>Cart</p>
                </div>
            </div>
        </div>
    </>
  )
}
