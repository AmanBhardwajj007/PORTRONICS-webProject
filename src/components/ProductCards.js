import React from 'react'
import '../css/index.css'

export default function ProductCards(props) {
  return (
    <>
        <div className="myCont">
            <div className="heading">
                <h1>{props.myHeading}</h1>
            </div>
            
            <div className="content">
                <img src={props.myImg} />
                <div className="line"></div>
                <div className='parentBar'>
                    <div className="bar">
                        <h3>{props.specs}</h3>
                    </div>
                    <div className="detail">
                        <h3>{props.model}</h3>
                        <h4>{props.modelSpecs}</h4>
                    </div>
                    <div className='parentPriceSec'>
                        <div className="priceSec">
                            <h2>{props.price}</h2> <span><del>{props.delPrice}</del></span>
                        </div>
                        
                        <div className="discBtn">
                            <div className="pDiscBtn">
                                <h3>{props.discount}</h3>
                            </div>
                        </div>
                        
                    </div>
                    <a>{props.Emi}<span>💸Buy on EMI</span><i class="ri-arrow-right-s-line"></i></a>
                    <div className="addToCartBtn">
                        <h1>ADD TO CART</h1>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
