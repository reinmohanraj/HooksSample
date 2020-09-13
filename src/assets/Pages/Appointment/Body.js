import React, { useState, useReducer, createContext } from "react";
import Sidebarnav from "./../../../Layout/Sidebar";
import Appointment from "./Appointmentheader";
import Header from "./../../../Layout/Header";
import Calendar from "../Fullviewcalendar/Calendar";
import "./../../Css/Body.css";
import Appointmentgridtableone from "./Appointmentgridtableone";
import data from "../../../data/tabledata.json";

export const AppointmentContext = createContext();

const initialState = data;
initialState.selectedCol = data.displayColumns;

const reducer = (state, action) => {
  switch (action.type) {
    case "COLSELECT":
      return {
        ...state,
        displayColumns: action.payload,
      };
    case "ROWS_SELECTED":
      return {
        ...state, 
        row: action.payload
      };
    default:
      throw new Error();
  }
};

const Body = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [sideToggle, setSideToggle] = useState(false);
  const [showCalendarView, setShowCalendarView] = useState(false);

  const handleSideToggle = (sideopen) => {
    setSideToggle(sideopen);
  };

  const displayCalendar = (data) => {
    setShowCalendarView(data);
  };
  return (
    <>
      <AppointmentContext.Provider value={[state, dispatch]}>
        <Header
          isOpen={sideToggle}
          onsideClick={(sideopen) => handleSideToggle(sideopen)}
        />
        <div className="body">
          <Sidebarnav isOpen={sideToggle} />
          {showCalendarView ? (
            <Calendar />
          ) : (
            <Appointment
              displayCalendar={displayCalendar}
              isOpen={sideToggle}
            />
          )}
          {/* <Appointmentgridtableone />  */}
        </div>
      </AppointmentContext.Provider>
    </>
  );
};

export default Body;
