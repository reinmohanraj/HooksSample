import React from 'react';
import './Sidebarnav.css';

const Sidebarnav = () =>{
return(
       <div className="Jikan_SidebarNavOuter">
           <div className="Jikan_SidebarNavInner">
               <ul className="">
                   <li>
                       <a href="">View All AppointMent </a>
                   </li>
                   <li>
                       <a href="">view Rooms</a>
                   </li>
                   <li>
                       <a href="">View Calendar</a>
                   </li>
                   <li>
                       <a href="">Profile</a>
                   </li>
               </ul>
           </div>
       </div>
)
}

export default Sidebarnav;