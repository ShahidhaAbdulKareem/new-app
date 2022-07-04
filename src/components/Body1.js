import React from "react";
import './Body1.css';
import leftarrow from './../assets/images/leftarrow.png';
import emperor from './../assets/images/emperor.png';
import heart1 from './../assets/images/heart1.png';
import arrow from './../assets/images/arrow.png';
import ellipse1 from './../assets/images/Ellipse 3.png';
import ellipse2 from './../assets/images/Ellipse 4.png';
import star from './../assets/images/star.png';
import button2 from './../assets/images/button2.png';
import replace from './../assets/images/replace.png';
import money from './../assets/images/money.png';
import checked from './../assets/images/checked.png';
function myfunction(){
        document.write("Hello World")
    
}
export default function Body1(){
    return(
        <div className="body">
        <div className="leftarrow"><img className="leftarrow" src={leftarrow}></img></div>
        <div className="emperor"><img className="emperor" src={emperor}></img></div>
        <div className="ellipse1"><img className="ellipse1" src={ellipse1}></img></div>
        <div className="heart1"><img className="heart1" src={heart1}></img></div>
        <div className="ellipse2"><img className="ellipse2" src={ellipse2}></img></div>
        <div className="arrow"><img className="arrow" src={arrow}></img></div>

        <div className="caption">
            <h1 className="caption1">Return of Immortal emperor</h1>
            <p className="para">Return of Immortal Emperor ManhuaPlus After being in  Immortal World for 3000 years, our main character risk everything to return back to his family to...<span className="red">more</span></p>
            <div className="rating">
                <p className="num">4.4</p>
                <img className="star" src={star}></img>
            </div>
             <div className="numb">130 ratings</div>
            <div className="numb1">$265</div>
            <div className="numb2">$222</div>
            <div className="offer"><b>16% off</b></div>
        </div>

        <div className="caption2">
            <p className="coupens">All offers & Coupons</p>
           <a className="rightlink"  href=""><img className="button2" src={button2}></img></a>
        </div>

        <div className="caption3">
          <a className="img-replace" href=""><img className="replace" src={replace}></img></a>
          <p className="replacement">7 days replacement</p> 
          <h1 className="vertical1"></h1> 
          <a className="img-money" href=""><img className="money" src={money}></img></a>
          <p className="cash-delivery">Cash on delivery available</p> 
          <h1 className="vertical2"></h1> 
          <a className="img-checked" href=""><img className="checked" src={checked}></img></a>
          <p className="quality">Quality checked</p> 
        </div>

        <div className="caption4">
            <p className="delivery"><span className="red">FREE delivery:</span> Monday, Feb 12 <span className="red">Details</span></p>  
        </div>

         <div className="caption5">
            <a className="add-to-cart" href=""><button className="added-to-cart" onClick="myfunction()"><p className="add-cart" id ="demo"><b>Add to cart</b></p></button></a> 
        </div>
        
        </div>
    )
}