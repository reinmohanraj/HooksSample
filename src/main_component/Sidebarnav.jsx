import React, { useState, useEffect } from "react";
import "./Sidebarnav.css";
import ListAltIcon from '@material-ui/icons/ListAlt';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import PersonIcon from '@material-ui/icons/Person';

const Sidebarnav = (props) => {
  const [sideNav, setSideNav] = useState({
    allApp: "Appointment",
    cal: "Calendar",
    rooms: "Rooms",
    profiles: "Profile",
  });

  const [sideIcon, setSideIcon] = useState({
    allApp: <ListAltIcon className="sidebarIcon"/>,
    cal: <CalendarViewDayIcon className="sidebarIcon"/>,
    rooms: <SingleBedIcon  className="sidebarIcon"/>,
    profiles: <PersonIcon  className="sidebarIcon"/>,
  });

  const [style, setStyle] = useState({});

  useEffect(() => {
    props.isOpen ? setStyle({}) : setStyle({ width: "3.2rem" });
  }, [props.isOpen]);

  const list = (sidenav, sideicon) => {
    if (props.isOpen) {
      return Object.keys(sidenav).map((key) => {
        return (
          <li>
            <a href="#">
              {sideicon[key]}
              {sidenav[key]}
            </a>{" "}
          </li>
        );
      });
    } else {
      return Object.keys(sideicon).map((key) => {
        return (
          <li>
            <a href="#">{sideIcon[key]}</a>{" "}
          </li>
        );
      });
    }
  };

  return (
    <div className="Jikan_SidebarNavOuter" style={style}>
      <div className="Jikan_SidebarNavInner">
        <ul className="">{list(sideNav, sideIcon)}</ul>
      </div>
    </div>
  );
};

export default Sidebarnav;
