import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Appointment.css";
import SearchIcon from "@material-ui/icons/Search";
import PrintIcon from "@material-ui/icons/Print";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import AddIcon from "@material-ui/icons/Add";
import EnhancedTable from "./Appointmentgridtable";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Modalprocedure from "../main_component/Modalprocedure";

const Appointment = (props) => {
  const [modalposition, setModalposition] = useState({ });


  const [selectedappoinments, setSelectedappoinments] = useState(
    "Showing all Appointments"
  );

  const [isopen, setIsopen] = useState(false);

  const selectChange = (num) => {
    if (num > 0) {
      setSelectedappoinments(`${num} Row(s) Selected`);
    } else {
      setSelectedappoinments("Showing all Appointments");
    }
  };
  
  const addProcedure = (e) => {
    setIsopen(!isopen)
    e.preventDefault();
    e.stopPropagation();
    let positionCo = e.target.getBoundingClientRect();
    setModalposition(positionCo);
  }

  const closeModal = () => {
    setIsopen(!isopen)
  }

  return (
      <div className={`Appoint ${props.isOpen ? 'Sidenav-open': ''}`}>
        <Row className="Appoint-header">
          <Col sm="12" md="7" className="Appoint-header-left">
            <span>Parnassus Apheresis</span>
            <span>{selectedappoinments}</span>
          </Col>
          <Col sm="12" md="5" className="Appoint-header-right">
            <span>
              <SearchIcon />
            </span>
            <span>
              <PrintIcon />
            </span>
            <span>
              <ViewColumnIcon />
            </span>
            <span>
              <CalendarViewDayIcon />
            </span>
          </Col>
        </Row>
        <Row className="Appoint-filter">
          <Col xs="12">
            <span onClick={(e) => addProcedure(e)}>
              <AddCircleIcon className="procedure-add-icon" />
            </span>
            <Modalprocedure isopen={isopen} modalposition={modalposition} onClose={() => closeModal()}/>
            <button className="filter-button">
              <span>
                <AddIcon />
              </span>
              Add a Filter
            </button>
          </Col>
        </Row>
        <Row className="Appoint-table">
          <EnhancedTable
            onSelect={(num) => {
              selectChange(num);
            }}
          />
        </Row>
      </div>
  );
};

export default Appointment;
