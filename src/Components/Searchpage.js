import React from 'react'
import './Searchpage.css'
import {Tune } from '@material-ui/icons';
import ChannelRow from './ChannelRow';

function Searchpage() {
    return (
        <div className='searchPage'>
            <div className='searchPage_filter'>
                <Tune className='searchPage_filter_icon'/>
                <h2>Filter</h2>
            </div>
            <hr/>
            <ChannelRow 
                image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
                channelname="Clever Programmer"
                verified
                subs="1.05M"
                noOfVideos={642}
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ...
"
            />
            <hr/>
            <VideoRow/>
        </div>
    )
}

export default Searchpage
// 
// Clever Programmer
// 1.05M subscribers•642 videos
// You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ...

// Latest from Clever Programmer