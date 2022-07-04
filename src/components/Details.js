import React from "react";
import './Details.css';
import heart from './../assets/images/heart.png';
import cart from './../assets/images/cart.png';
import login from './../assets/images/login.png';

export default function Details(){
    return(
        <div className="navbar">
            <ul>
             <li><a className="active" href="#home">Home</a></li>
             <li><a className="news" href="#news">About us</a></li>
             <li><a className="about" href="#about">Pay and  delivery</a></li>
             <li><a className="contact" href="#contact">Contact us</a></li>
             <li><a href="#heart"><img className="heart" src={heart} alt="favourite"></img></a></li>
             <li><a href="#12345"><img className="cart" src={cart} alt="cart"></img></a></li>
             <li><a href="#login"><img className="login" src={login} alt="login"></img></a></li>
            </ul>
        </div>
    )
}
