import React from "react";
import { Navbar } from "./Navbar";
import { Table } from "./Table";

export default {
  title: "Table",
};

// export const NavbarPreview = () => (
//   <Navbar logo={"TestName"}  />
// );

export const TableTest = () => {
  return (
    <Table
      columns={[
        {
          accessorKey: "id",
        },
        {
          accessorKey: "name",
        },
        {
          accessorKey: "age",
        },
      ]}
      data={[
        { id: "a", name: "test", age: 45 },
        { id: "b", name: "another", age: 23 },
      ]}
    />
  );
};
