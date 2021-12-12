
import React from 'react';
import Menu from '@material-ui/icons/Menu';
import { Apps, Notifications, Search, VideoCall } from '@material-ui/icons';
import logo from './media/logo.png';
import { Avatar } from '@material-ui/core';
import avatar from './media/avatar.png';
import './Header.css';


function Header() {
    return (
        <div className='flexh header'>
            <div className='flexh header_firstchild'>
                <Menu className='menubar'/>
                <img className='header_logo' src={logo}  alt="logo"/>
            </div>
            
            <div className='flexh header_search'>
                <input className='search_i' type="text"/>
                <Search className='search_btn'/>
            </div>

             <div className='flexh header_thirdchild'>
                <Apps/>
                <VideoCall/>
                <Notifications />
                <Avatar alt="incredibleHulk" src={avatar}/>
             </div>
            
        </div>
    )
}

export default Header
