
import React from 'react';
import Menu from '@material-ui/icons/Menu';
import { Apps, Notifications, Search, VideoCall } from '@material-ui/icons';
import logo from './media/logo.png';
import { Avatar } from '@material-ui/core';
import avatar from './media/avatar.png';
import './Header.css';


function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <Menu className='menubar'/>
                <img className='header_logo' src={logo}  alt="logo"/>
            </div>
            
            <div className='header_input'>
                <input className='search_i' type="text"/>
                <Search className='search_btn'/>
            </div>

             <div className='header_icons'>
                <Apps className='header_icon'/>
                <VideoCall className='header_icon'/>
                <Notifications className='header_icon' />
                <Avatar alt="incredibleHulk" src={avatar}/>
             </div>
            
        </div>
    )
}

export default Header
