import DataTable from "react-data-table-component";

function Table() {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
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
      name: "Weight",
      selector: (row) => row.weight,
      sortable: true,
    },
  ];

  const rows = [
    {
      id: 1,
      fullName: "John Doe",
      height: "1.75m",
      weight: "89kg",
    },
    {
      id: 2,
      fullName: "Jane Doe",
      height: "1.64m",
      weight: "55kg",
    },
    {
      id: 3,
      fullName: "Sheera Maine",
      height: "1.69m",
      weight: "74kg",
    },
    {
      id: 4,
      fullName: "Samantha",
      height: "1.75m",
      weight: "69kg",
    },
    {
      id: 5,
      fullName: "John Doe",
      height: "1.75m",
      weight: "89kg",
    },
    {
      id: 6,
      fullName: "Jane Doe",
      height: "1.64m",
      weight: "55kg",
    },
    {
      id: 7,
      fullName: "Sheera Maine",
      height: "1.69m",
      weight: "74kg",
    },
    {
      id: 8,
      fullName: "Samantha",
      height: "1.75m",
      weight: "69kg",
    },
    {
      id: 9,
      fullName: "John Doe",
      height: "1.75m",
      weight: "89kg",
    },
    {
      id: 10,
      fullName: "Jane Doe",
      height: "1.64m",
      weight: "55kg",
    },
    {
      id: 11,
      fullName: "Sheera Maine",
      height: "1.69m",
      weight: "74kg",
    },
    {
      id: 12,
      fullName: "Samantha",
      height: "1.75m",
      weight: "69kg",
    },
    {
      id: 13,
      fullName: "John Doe",
      height: "1.75m",
      weight: "89kg",
    },
    {
      id: 14,
      fullName: "Jane Doe",
      height: "1.64m",
      weight: "55kg",
    },
    {
      id: 15,
      fullName: "Sheera Maine",
      height: "1.69m",
      weight: "74kg",
    },
    {
      id: 16,
      fullName: "Samantha",
      height: "1.75m",
      weight: "69kg",
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
