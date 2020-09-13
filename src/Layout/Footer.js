import React from 'react';
import '../assets/Css/Layout.css';
  

const Footer = () => {
    return(
        <div className="Jikan_Footer">
            <div className="Jikan_FooterContent">
                <div className="Jikan_FooterContentRight">
                <div className=""><span id="year">2020</span> Aithent</div>
                {/* <div className="">©<span id="year">2020</span> Aithent. All rights reserved</div> */}
                </div>
            </div>
        </div>
    );
}

export default Footer;