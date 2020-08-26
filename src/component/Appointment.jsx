import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Appointment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPrint,
  faGripLinesVertical,
  faGripLines,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Datatable from './Datatables';

const Appointment = () => {
  return (
    <Container className="container">
      <div className="Appoint card">
        <Row className="Appoint-header">
          <Col xs="6" className="Appoint-header-left">
            <span>Parnassus Apheresis</span>
            <span>Showing all Appointments</span>
          </Col>
          <Col xs="6" className="Appoint-header-right">
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <span>
              <FontAwesomeIcon icon={faPrint} />
            </span>
            <span>
              <FontAwesomeIcon icon={faGripLinesVertical} />
            </span>
            <span>
              <FontAwesomeIcon icon={faGripLines} />
            </span>
          </Col>
        </Row>
        <Row className="Appoint-filter">
          <Col xs="12">
            <button className="filter-button">
              <span>
                <FontAwesomeIcon icon={faPlus} />
              </span>
                Add a Filter
            </button>
          </Col>
        </Row>
        <Row className="Appoint-table">
            <Datatable />
        </Row>
      </div>
    </Container>
  );
};

export default Appointment;
