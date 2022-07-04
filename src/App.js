import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart2 from './components/Cart2';
import {CartProvider} from "react-use-cart";
import Details from'./components/Details';
import Body1 from'./components/Body1';
import Cart from './components/Cart';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import Header from './components/Header';
import HeaderTwo from './components/HeaderTwo';
import Home from './components/Home';
import Home2 from "./components/Home2";


export default function App() {
  return (

    <div className="App">
       <Header/>
      <HeaderTwo/>
       <Home/> 
       <Home2/>
        {/* <Details/>
        <Body1/> 
         <Cart/>   */}
          {/* <CartProvider> 
         <Cart2/>
          </CartProvider> 
         <Counter1/>
        <Counter2/>
        <Counter3/>  */}
        
    </div>
  
  );
}
