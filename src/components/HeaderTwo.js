import React from 'react';
import './HeaderTwo.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const HeaderTwo = () => {
    return(
    <div className='headertwo'>
        <ul className='headertwo-option'>
            <li className='headertwo-list'><a href="#home">Home</a></li>
            <li className='headertwo-list'><a href="#news">About Us</a></li>
            <li className='headertwo-list'><a href="#contact">Pay and Delivery</a></li>
            <li className='headertwo-list'><a href="#about">Contact Us</a></li>
            <li className='headertwo-list2'>
                <a href="#profile">
                    <AccountCircleOutlinedIcon
                        className='header-profile-icon'
                    />
                </a>
            </li>
            <li className='headertwo-list2'>
                <a href="#cart">
                    <ShoppingCartOutlinedIcon
                        className='header-cart-icon'
                    />
                </a>
            </li>
            <li className='headertwo-list2'>
                <a href="#fav">
                    <FavoriteIcon
                        className='header-fav-icon'
                    />
                </a>
            </li>
        </ul>

    </div>
    );
}


export default HeaderTwo;