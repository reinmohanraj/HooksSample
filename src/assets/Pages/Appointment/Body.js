import React, { useState } from "react";
import Sidebarnav from "./../../../Layout/Sidebar";
import Appointment from "./Appointmentheader";
import Header from "./../../../Layout/Header";
import "./../../Css/Body.css";
const Body = () => {
  const [sideToggle, setSideToggle] = useState(false);

  const handleSideToggle = (sideopen) => {
    setSideToggle(sideopen);
  };

  return (
    <>
      <Header
        isOpen={sideToggle}
        onsideClick={(sideopen) => handleSideToggle(sideopen)}
      />
      <div className="body">
          <Sidebarnav isOpen={sideToggle} />
          <Appointment isOpen={sideToggle} />
          
      </div>
    </>
  );
};

export default Body;
