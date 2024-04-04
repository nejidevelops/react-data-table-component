import { useState } from "react";
import DataTable from "react-data-table-component";

function Table() {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.personID,
      sortable: true,
    },
    {
      name: "Full Name",
      selector: (row) => row.fullName,
      sortable: true,
    },
    {
      name: "Height",
      selector: (row) => row.height,
      sortable: true,
    },
    {
      name: "Eye Color",
      selector: (row) => row.eyeColor,
      sortable: true,
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

  const [data, setData] = useState(rows);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchValue: boolean;
    let personIDValue: boolean;
    let fullNameValue: boolean;
    let heightValue: boolean;
    let eyeColorValue: boolean;

    const newRows = rows.filter((row) => {
      personIDValue = row.personID
        .toString()
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      fullNameValue = row.fullName
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      heightValue = row.height
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      eyeColorValue = row.eyeColor
        .toLowerCase()
        .includes(e.target.value.toLowerCase());

      if (personIDValue) {
        searchValue = personIDValue;
      } else if (fullNameValue) {
        searchValue = fullNameValue;
      } else if (heightValue) {
        searchValue = heightValue;
      } else {
        searchValue = eyeColorValue;
      }

      return searchValue;
    });

    setData(newRows);
  };

  return (
    <>
      <div className="container my-5">
        <div>
          <input
            type="search"
            className="form-control-sm border ps-3"
            placeholder="Search"
            onChange={handleSearch}
          />
        </div>
        <DataTable
          columns={columns}
          data={data}
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
