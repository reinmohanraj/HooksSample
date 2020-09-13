import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import PrintIcon from "@material-ui/icons/Print";

import AddIcon from "@material-ui/icons/Add";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import CloseIcon from '@material-ui/icons/Close';
import "./../../Css/Appointmentheader.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Calendartodayview from './Calendartodayview'
import ViewListIcon from '@material-ui/icons/ViewList';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// import { useHistory } from "react-router-dom";
// // import Modalprocedure from "./popupmodal";

// const history = useHistory();
// const onClickCalendar = (e) => {
//   e.preventDefault();
//   history.push('/calendar')
// }

const Appointment = (props) => {
const [modalposition, setModalposition] = useState({});
const [isSelected, setIsSelected] = useState(0);

const [selectedappoinments, setSelectedappoinments] = useState(
    "Showing all Appointments"
);

const [isopen, setIsopen] = useState(false);

const [colTarget, setColTarget] = useState();

const [showDeletePopup, setshowDeletePopup] = useState(false);

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
const deleteRowselected = () => {
  setshowDeletePopup(!showDeletePopup);
  console.log("buttonclick");

  // setRowDelete(e.rowdeleteTarget);
}
const displayDeleteRowPoup = () => {
   return (
     
     <div className="deletedropdown">
         <form className="" noValidate autoComplete="off">
      <div>
      <h4>Cancellation Reason</h4>
       <span className="closeicon"><CloseIcon onClick={deleteRowselected}/></span>
        <TextField className="resonForDelete"
          id="standard-multiline-static"
          multiline
          rows={4}
          defaultValue=""
        />
      </div>
      </form>
      <Button className="deleteSave" size="small" onClick={deleteRowselected}>Save</Button>
     </div>
   )
}
const colMenu = (target) => {
    setColTarget();
    // setRowDelete();
}


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
          <span>
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
        <span onClick={() => deleteRowselected()}>
          <DeleteIcon />
          {/* <Deleteselectedrow rowdeleteTarget={rowDelete} onClick={(close) => colMenu(close)} /> */}
        </span>
        </div>
      );
    } else {
      return (
        <div  className="calendarViewToday">
        <span>
        <FormControl>
        <NativeSelect>
          <option value="" >
            Week
          </option>
          <option value={10}>Day</option>
          <option value={20}>Month</option>
        </NativeSelect>
      </FormControl>
        </span>
         <span className="todaybtn">
         <Button size="small" variant="outlined">Today</Button>
         </span>
         <span>
           < KeyboardArrowLeftIcon />
           < KeyboardArrowRightIcon />
         </span>
         <span>
           <span className="clickdate">Sept 09, 2020</span>
         </span>
          <span>
            <SearchIcon />
          </span>
          <span>
            <PrintIcon />
          </span>
        <span>
        < ViewListIcon />
        </span>
        
       </div>
      );
    }
  };

  return (
   
    <div className={`Appoint ${props.isOpen ? "Sidenav-open" : ""}`}> 
      <Grid container className="Appoint-header">
        <Grid item  xs={12} sm={6} className="Appoint-header-left">
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
       <Calendartodayview />
      </Grid>
    </div>
  );
};

export default Appointment;
