import React from 'react';
import './header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import HeaderDropdown from './HeaderDropdown';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';


const Header = () => {
    return(
      <div className="jik_Header">
        <div className="Jik_HeaderContent">
            <div className="Jik_HeaderContentLeft">
            <div class="Jik_Header_menu">
              <MenuIcon />  
            </div>
            <div className="Jik_Header_logo">
              <img src=""></img>
            </div>
            <div className="Jik_Header_search">
              <SearchIcon className="Jik_Header_searchIcon" />
              <input className="Jik_Header_searchtext" type="search" placeholder="search..." />
            </div>
            </div>
            <div className="Jik_HeaderContentRight">
              <div className="Notification_icon">
                < NotificationsNoneIcon />
              </div>
             <div className="Jik_HeaderContentRightLogin">
            
              <a href="#">
                 <div className="user_login">
                   <div className="user_name">
                     Admin
                   </div>
                   <div className="user_role">
                     Role of the Person
                   </div>
                 </div>
               </a>
               <div className="">
                 <HeaderDropdown />
               </div>
             </div>
            </div>
        </div>
      </div>
    );
}

export default Header;