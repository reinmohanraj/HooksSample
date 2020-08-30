import React, { useState } from "react";
import Sidebarnav from "./Sidebarnav";
import Appointment from "../Secction_Component/Appointment";
import { Row } from "reactstrap";
import Header from "../main_component/Header";
import "./Body.css";

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
      <Row className="body">
          <Sidebarnav isOpen={sideToggle} />
          <Appointment isOpen={sideToggle} />
      </Row>
    </>
  );
};

export default Body;
