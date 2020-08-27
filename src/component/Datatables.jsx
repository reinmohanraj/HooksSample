import React, { useState } from "react";
import { Table } from "reactstrap";
import "./Datatables.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Datatable = () => {
  const [data, setdata] = useState({
    columns: [
      { label: "Date" },
      { label: "Start" },
      { label: "End" },
      { label: "Name" },
      { label: "Age" },
      { label: "MRN" },
      { label: "Procedure" },
      { label: "Location" },
      { label: "Status" },
      { label: "Notes" },
    ],
    dataValues: [
      {
        Date: "Jun 18 2019",
        Start: "7:00 AM",
        End: "8:00AM",
        Name: "Mohan",
        Age: "57",
        MRN: "12345",
        Procedure: "Plasma Exchange",
        Location: "Room006",
        Status: "Pending",
        Notes: "hey",
      },
      {
        Date: "Jun 18 2019",
        Start: "7:00 AM",
        End: "8:00AM",
        Name: "Lav",
        Age: "57",
        MRN: "12345",
        Procedure: "Plasma Exchange",
        Location: "Room006",
        Status: "Pending",
        Notes: "hey",
      },
      {
        Date: "Jun 18 2019",
        Start: "7:00 AM",
        End: "8:00AM",
        Name: "Atchu",
        Age: "57",
        MRN: "12345",
        Procedure: "Plasma Exchange",
        Location: "Room006",
        Status: "Pending",
        Notes: "hey",
      },
    ],
  });

  const sorting = () => {
      let sorted = data.dataValues.sort((a, b) => {
        var nameA = a.Name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.Name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
      console.log(sorted)
      setdata({ ...data,
          dataValues: [sorted]
      })
      console.log(data)
  }

  const getHeader = () => {
    return data.columns.map((elem, index) => {
      return <th>{elem.label} <span onClick = {() => {sorting()}}><FontAwesomeIcon icon={faArrowUp} /></span></th>;
    });
  };

  const getSubContent = (subContent) => {
    return Object.keys(subContent).map((key, index) => {
      return <td>{subContent[key]}</td>;
    });
  };

  const getContent = () => {
    return data.dataValues.map((elem, index) => {
      return (
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          {getSubContent(elem)}
        </tr>
      );
    });
  };

  return (
    <>
      <Table>
        <thead>
          <tr className="appoint-table-header">
            <th>
              <input type="checkbox" />
            </th>
            {getHeader()}
          </tr>
        </thead>
        <tbody>{getContent()}</tbody>
      </Table>
    </>
  );
};

export default Datatable;
