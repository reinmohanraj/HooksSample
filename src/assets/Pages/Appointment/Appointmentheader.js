import React, { useState, useEffect, useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import PrintIcon from "@material-ui/icons/Print";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import AddIcon from "@material-ui/icons/Add";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import EnhancedTable from "./Appointmentgridtable";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import CloseIcon from "@material-ui/icons/Close";
import CustomizedMenus from "./Displaytablecol";
import "./../../Css/Appointmentheader.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Procedurepopup from "./popupmodal";
import { useHistory } from "react-router-dom";
import { AppointmentContext } from "./Body";

const Appointment = (props) => {
  const [state, dispatch] = useContext(AppointmentContext);
  const [isSelected, setIsSelected] = useState(0);

  const [selectedappoinments, setSelectedappoinments] = useState(
    "Showing all Appointments"
  );

  const [selectedRows, setSelectedRows] = useState();

  const [isopen, setIsopen] = useState(false);

  const [colTarget, setColTarget] = useState();

  const [showDeletePopup, setshowDeletePopup] = useState(false);

  const selectChange = (num) => {
    setSelectedRows(num);
    if (num.length > 0) {
      setSelectedappoinments(`${num.length} Row(s) Selected`);
      if (num.length === 1) {
        setIsSelected(1);
      } else {
        setIsSelected(2);
      }
    } else {
      setSelectedappoinments("Showing all Appointments");
      setIsSelected(0);
    }
  };

  const addProcedure = () => {
    console.log("add procedure open");
    setIsopen(!isopen);
    // e.preventDefault();
    // e.stopPropagation();
    // let positionCo = e.target.getBoundingClientRect();
    // setModalposition(positionCo);
  };

  const closeModal = () => {
    setIsopen(!isopen);
  };

  const columnSelect = (e) => {
    setColTarget(e.currentTarget);
  };

  const editTablerow = () => {
    console.log("editrow column");
  };
  const deleteRowselected = () => {
    setshowDeletePopup(!showDeletePopup);
    // setRowDelete(e.rowdeleteTarget);
  };
  const deleteSelectedRowGrid = () => {
    let rowsSelected = state.row.filter((row) => {
      if(!selectedRows.includes(row.MRN)){
        return row;
      }
    })
    console.log("rowsSelected", rowsSelected);
    dispatch({
      type: 'ROWS_SELECTED',
      payload: rowsSelected
    })
  };
  const displayDeleteRowPoup = () => {
    return (
      <div className="deletedropdown">
        <form className="" noValidate autoComplete="off">
          <div>
            <h4>Cancellation Reason</h4>
            <span className="closeicon">
              <CloseIcon onClick={() => deleteRowselected()} />
            </span>
            <TextField
              className="resonForDelete"
              id="standard-multiline-static"
              multiline
              rows={4}
              defaultValue=""
            />
          </div>
        </form>
        <Button
          className="deleteSave"
          size="small"
          onClick={() => deleteSelectedRowGrid()}
        >
          Save
        </Button>
      </div>
    );
  };
  const colMenu = (target) => {
    setColTarget();
    // setRowDelete();
  };

  const history = useHistory();
  const onClickCalendar = (e) => {
    e.preventDefault();
    history.push("/calendar");
  };
  const icons = () => {
    if (isSelected === 1) {
      return (
        <>
          <span>
            <HourglassEmptyIcon />
          </span>
          <span>
            <AssignmentIcon />
          </span>
          <span onClick={() => editTablerow()}>
            <EditIcon />
          </span>
          <span onClick={() => deleteRowselected()}>
            <DeleteIcon />
          </span>
        </>
      );
    } else if (isSelected === 2) {
      return (
        <div>
          <span>
            <HourglassEmptyIcon />
          </span>
          <span onClick={(e) => deleteRowselected(e)}>
            <DeleteIcon />
          </span>
        </div>
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
          <CustomizedMenus
            currentTarget={colTarget}
            onClick={(close) => colMenu(close)}
          />
          <span onClick={() => props.displayCalendar(true)}>
            <CalendarViewDayIcon />
          </span>
        </>
      );
    }
  };

  return (
    <div className={`Appoint ${props.isOpen ? "Sidenav-open" : ""}`}>
      <Grid container className="Appoint-header">
        <Grid item xs={12} sm={6} className="Appoint-header-left">
          <span>Parnassus Apheresis</span>
          <span>{selectedappoinments}</span>
        </Grid>
        <Grid item xs={12} sm={6} className="Appoint-header-right">
          {icons()}
          {showDeletePopup && displayDeleteRowPoup()}
        </Grid>
      </Grid>
      <Grid className="Appoint-filter">
        <Grid item xs={12}>
          <span onClick={() => addProcedure()}>
            <AddCircleIcon className="procedure-add-icon" />
          </span>
          {isopen && <Procedurepopup />}
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
