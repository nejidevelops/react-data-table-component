import { useState } from "react";
import DataTable from "react-data-table-component";

function Table() {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.personID,
    },
    {
      name: "Full Name",
      selector: (row) => row.fullName,
    },
    {
      name: "Height",
      selector: (row) => row.height,
    },
    {
      name: "eyeColor",
      selector: (row) => row.eyeColor,
    },
  ];

  const rows = [
    {
      personID: 1,
      fullName: "Kate Shein",
      height: "1.79m",
      eyeColor: "blue",
    },

    {
      personID: 2,
      fullName: "Isabella Thompson",
      height: "1.79m",
      eyeColor: "blue",
    },
    {
      personID: 3,
      fullName: "Kate Shein",
      height: "1.79m",
      eyeColor: "blue",
    },

    {
      personID: 4,
      fullName: "Isabella Thompson",
      height: "1.79m",
      eyeColor: "blue",
    },
    {
      personID: 5,
      fullName: "Kate Shein",
      height: "1.79m",
      eyeColor: "blue",
    },

    {
      personID: 6,
      fullName: "Isabella Thompson",
      height: "1.79m",
      eyeColor: "blue",
    },
    {
      personID: 7,
      fullName: "Kate Shein",
      height: "1.79m",
      eyeColor: "blue",
    },

    {
      personID: 8,
      fullName: "Isabella Thompson",
      height: "1.79m",
      eyeColor: "blue",
    },
    {
      personID: 9,
      fullName: "Kate Shein",
      height: "1.79m",
      eyeColor: "blue",
    },
    {
      personID: 10,
      fullName: "Isabella Thompson",
      height: "1.79m",
      eyeColor: "blue",
    },
    {
      personID: 11,
      fullName: "Kate Shein",
      height: "1.79m",
      eyeColor: "blue",
    },
    {
      personID: 12,
      fullName: "Isabella Thompson",
      height: "1.79m",
      eyeColor: "blue",
    },
    {
      personID: 13,
      fullName: "Kate Shein",
      height: "1.79m",
      eyeColor: "blue",
    },
    {
      personID: 14,
      fullName: "Isabella Thompson",
      height: "1.79m",
      eyeColor: "blue",
    },
    {
      personID: 15,
      fullName: "Kate Shein",
      height: "1.79m",
      eyeColor: "blue",
    },
    {
      personID: 16,
      fullName: "Isabella Thompson",
      height: "1.79m",
      eyeColor: "blue",
    },
  ];

  return (
    <>
      <div className="container my-5">
        <div>
          <input
            type="search"
            className="form-control-sm border ps-3"
            placeholder="Search"
          />
        </div>
        <DataTable
          columns={columns}
          data={rows}
          fixedHeader
          title="React Data Table Component"
          pagination
          selectableRows
        />
      </div>
    </>
  );
}

export default Table;
