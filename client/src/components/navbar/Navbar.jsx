import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import {
    Link
} from 'react-router-dom';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    };
    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                    <Link to='/' className='link'>
                    <span>Home Page</span>
                    </Link>
                    <Link to='/series' className='link'>
                    <span>Series</span>
                    </Link>
                    <Link to='/movies' className='link'>
                    <span>Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My list</span>
                </div>
                <div className="right">
                    <SearchIcon className='icon'/>
                    <span>KID</span>
                    <NotificationsIcon className='icon'/>
                    <img src="https://images.pexels.com/photos/9096986/pexels-photo-9096986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <div className="profile">
                        <ArrowDropDownIcon className='icon'/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Navbar