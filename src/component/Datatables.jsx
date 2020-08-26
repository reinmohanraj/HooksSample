import React, { useState } from "react";
import { Table } from "reactstrap";
import './Datatables.css'

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
        Name: "JAME",
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
        Name: "JAME",
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
        Name: "JAME",
        Age: "57",
        MRN: "12345",
        Procedure: "Plasma Exchange",
        Location: "Room006",
        Status: "Pending",
        Notes: "hey",
      },
    ],
  });

  const getHeader = () => {
    return data.columns.map((elem, index) => {
      return (
        <th>
          {elem.label}
        </th>
      );
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
          <tr className='appoint-table-header'>
            <th>
                <input type="checkbox" />
            </th>
            {getHeader()}
          </tr>
        </thead>
        <tbody>
          {getContent()}
        </tbody>
      </Table>
    </>
  );
};

export default Datatable;
