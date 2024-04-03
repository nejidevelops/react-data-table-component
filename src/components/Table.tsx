import DataTable from "react-data-table-component";

function Table() {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
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
      name: "Weight",
      selector: (row) => row.weight,
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
    },    {
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
    },    {
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
        <DataTable
          columns={columns}
          data={rows}
          fixedHeader
          title='React Data Table Component'
        />
      </div>
    </>
  );
}

export default Table;
