import React from 'react';
import logo1 from './../assets/images/logo1.png';
import logo2 from './../assets/images/logo2.png';
import './Header.css';
import SearchBar from "./SearchBar";
import BookData from '../Data.json';
const Header = () => {
    return(
    <div className='header'>
        <img 
            className='header-logo-one'
           src={logo1}
        />
        <img
            className='header-logo-two'
            src={logo2}
        />
         <SearchBar placeholder="search......" data={BookData}/> 
        
    </div>
    );
}

export default Header;