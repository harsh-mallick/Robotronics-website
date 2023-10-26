import React from 'react'
import '../Css/Cart.css'
import image from "../Images/Food.jpeg"
import { Link } from "react-router-dom"

const cart = () => {
    return (
        <div className='main-cart'>
            <div className="flexcon">
                <div className="item">
                    <div className="itemcon">
                        <img src={image} alt="" className='itemcon-image' />
                        <div className="itemcon-text">
                            <p className='itemcon-header'>Chicken Burger (Non Veg)  ₹80</p>
                            <p className="itemcon-descrip">A mouthwatering delight that perfectly marries the savory goodness of tender, juicy chicken with a symphony of delectable flavors, our Chicken Burger is a culinary masterpiece that will satisfy your cravings and leave your taste buds dancing with joy.</p>
                        </div>
                    </div>
                    <div className="itemcon">
                        <img src={image} alt="" className='itemcon-image' />
                        <div className="itemcon-text">
                            <p className='itemcon-header'>Chicken Burger (Non Veg)  ₹80</p>
                            <p className="itemcon-descrip">A mouthwatering delight that perfectly marries the savory goodness of tender, juicy chicken with a symphony of delectable flavors, our Chicken Burger is a culinary masterpiece that will satisfy your cravings and leave your taste buds dancing with joy.</p>
                        </div>
                    </div>
                    <div className="itemcon">
                        <img src={image} alt="" className='itemcon-image' />
                        <div className="itemcon-text">
                            <p className='itemcon-header'>Chicken Burger (Non Veg)  ₹80</p>
                            <p className="itemcon-descrip">A mouthwatering delight that perfectly marries the savory goodness of tender, juicy chicken with a symphony of delectable flavors, our Chicken Burger is a culinary masterpiece that will satisfy your cravings and leave your taste buds dancing with joy.</p>
                        </div>
                    </div>
                </div>
                <div className="total">
                    <div className="hotel-name">Harmony Dinner</div>
                    <p className="subtotal">Subtotal (3 items): ₹130</p>
                    <p className="total-descrip">
                        <div className="total-descrip-header">
                            <p>GST:</p>
                            <p>Service Charge:</p>
                        </div>
                        <div className="total-descrip-price">
                            <p>₹0</p>
                            <p>₹0</p>
                        </div>
                    </p>
                    <Link to="/order"><button className="order-item">Order Now</button></Link>
                </div>
            </div>
        </div>
    )
}

export default cart 