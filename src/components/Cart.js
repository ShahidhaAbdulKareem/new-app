import React, { useState } from "react";
import './Cart.css';
import superman from './../assets/images/emperor.png';
import hero from './../assets/images/Hero.png';
import ironman from './../assets/images/Ironman.png';
import arrow2 from './../assets/images/arrow2.png';
export default function Cart(){
    return(
        <>
        <div className="body2" id="12345">
            <h1 className="shopping">SHOPPING CART</h1> 
            <h1 className="items">3 items</h1>
            <hr className="line"></hr> 

            <h2 className="product-details">Product details</h2>
            <h2 className="quantity">Quantity</h2>
            <h2 className="price">Price</h2>
            <h2 className="total">Total</h2>

            <img className="product" src={superman}></img>
            <h2 className="product-heading">Return of Immortal emperor:</h2>
            <p className="product-caption">The ultimate guide to the man of steel</p>

            {/* <img className="superman" src={superman}></img>
            <h2 className="superman-heading">Superman:</h2>
            <p className="superman-caption">The ultimate guide to the man of steel</p>
            

            <img className="hero" src={hero}></img>
            <h2 className="hero-heading">My hero academia:</h2>
            <p className="hero-caption">Japanese anime</p>

            <img className="ironman" src={ironman}></img>
            <h2 className="ironman-heading">Ironman:</h2>
            <p className="ironman-caption">Marvel vault of heroes</p>


            <p className="price1">$260</p>
            <p className="price2">$460</p>
            <p className="price3">$260</p> */}
            <a href =""><img className="arrow2" src={arrow2}></img></a>
            <p className="continue">Continue shopping</p>

             </div>

        <div className="body21">
            <h1 className="summary">Order Summary</h1> 
            <hr className="line2"></hr> 
            <h2 className="item2">Items :</h2>
            <h2 className="shipping">Shipping</h2>

            <div className="apply1">
            <p className="apply2">Apply</p></div>
            <hr className="line3"></hr>  
            <p className="totalcost">TOTAL COST</p>
            {/* <div className="next1">
            <a className="next2" href=""><p className="next3">Next</p></a></div> */}
          
    </div>
            
        </>
    )
}