import React, { useState, useEffect } from "react";
import "./Sidebarnav.css";
import AddCommentIcon from "@material-ui/icons/AddComment";

const Sidebarnav = (props) => {
  const [sideNav, setSideNav] = useState({
    allApp: "View All AppointMent",
    rooms: "view Rooms",
    cal: "View Calendar",
    profiles: "Profile",
  });

  const [sideIcon, setSideIcon] = useState({
    allApp: <AddCommentIcon />,
    rooms: <AddCommentIcon />,
    cal: <AddCommentIcon />,
    profiles: <AddCommentIcon />,
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
