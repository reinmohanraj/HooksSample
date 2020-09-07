import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import PrintIcon from "@material-ui/icons/Print";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import AddIcon from "@material-ui/icons/Add";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import EnhancedTable from "./Appointmentgridtable";
import "./../../Css/Appointmentheader.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AssignmentIcon from "@material-ui/icons/Assignment";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import CustomizedMenus from './Displaytablecol';
// import Modalprocedure from "./popupmodal";

const Appointment = (props) => {
  const [modalposition, setModalposition] = useState({});
  const [isSelected, setIsSelected] = useState(0);

  const [selectedappoinments, setSelectedappoinments] = useState(
    "Showing all Appointments"
  );

  const [isopen, setIsopen] = useState(false);

  const [colTarget, setColTarget] = useState();

  const selectChange = (num) => {
    if (num > 0) {
      setSelectedappoinments(`${num} Row(s) Selected`);
      if (num === 1) {
        setIsSelected(1);
      } else {
        setIsSelected(2);
      }
    } else {
      setSelectedappoinments("Showing all Appointments");
      setIsSelected(0);
    }
  };

  const addProcedure = (e) => {
    setIsopen(!isopen);
    e.preventDefault();
    e.stopPropagation();
    let positionCo = e.target.getBoundingClientRect();
    setModalposition(positionCo);
  };

  const closeModal = () => {
    setIsopen(!isopen);
  };

  const columnSelect = (e) => {
    setColTarget(e.currentTarget);
  }

  const colMenu = (target) => {
    setColTarget();
  }

  const icons = () => {
    if (isSelected === 1) {
      return (
        <>
          <span>
            <VerifiedUserIcon />
          </span>
          <span>
            <AssignmentIcon />
          </span>
          <span>
            <EditIcon />
          </span>
          <span>
            <DeleteIcon />
          </span>
        </>
      );
    } else if (isSelected === 2) {
      return (
        <span>
          <DeleteIcon />
        </span>
      );
    } else {
      return (
        <>
          <span>
            <SearchIcon />
          </span>
          <span>
            <PrintIcon />
          </span>
          <span onClick={(e) => columnSelect(e)}>
            <ViewColumnIcon />
          </span>
          <CustomizedMenus currentTarget={colTarget} onClick={(close) => colMenu(close)} />
          <span>
            <CalendarViewDayIcon />
          </span>
        </>
      );
    }
  };

  return (
    <div className={`Appoint ${props.isOpen ? "Sidenav-open" : ""}`}>
      <Grid className="Appoint-header">
        <Grid item xs={12} className="Appoint-header-left">
          <span>Parnassus Apheresis</span>
          <span>{selectedappoinments}</span>
        </Grid>
        <Grid item xs={12} className="Appoint-header-right">
          {icons()}
        </Grid>
      </Grid>
      <Grid className="Appoint-filter">
        <Grid item xs={12}>
          <span onClick={(e) => addProcedure(e)}>
            <AddCircleIcon className="procedure-add-icon" />
          </span>
          {/* <Modalprocedure isopen={isopen} modalposition={modalposition} onClose={() => closeModal()}/> */}
          <button className="filter-button">
            <span>
              <AddIcon />
            </span>
            <span className="add-filter">Add a Filter</span>
          </button>
        </Grid>
      </Grid>
      <Grid className="Appoint-table">
        <EnhancedTable
          onSelect={(num) => {
            selectChange(num);
          }}
        />
      </Grid>
    </div>
  );
};

export default Appointment;
