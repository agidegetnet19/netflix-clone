import React from "react";
import './header.css'
import Netflix_Logo_PMS from '../../assets/Netflix_Logo_PMS.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
    return (
        <div className="header_outer_container">
            <div className="header_container">
                <div className="header_left">
                    <ul>
                        <li><img src={Netflix_Logo_PMS} alt="Netflix Logo" width={100} /></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">TV Shows</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">Latest</a></li>
                        <li><a href="#">My List</a></li>
                        <li><a href="#">Browse by Languages</a></li>
                    </ul>
                </div>
                <div className="header_right">
                    <ul>
                        <li><SearchIcon /></li>
                        <li><NotificationsNoneIcon /></li>
                        <li><AccountBoxIcon /></li>
                        <li><ArrowDropDownIcon /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;