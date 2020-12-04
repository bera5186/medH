import React, { useEffect, useContext, useMemo } from "react";

// state context
import { StateContext } from "../../../context/StateContext";
import Data from "./data.json";
import { COLUMNS } from "./Columns";

// 3rd party
import { useTable } from "react-table";
const axios = require("axios").default;

const DataTable = () => {
  const { tableData } = useContext(StateContext);
  const [tabledata, setTableData] = tableData;

  const columns = useMemo(() => COLUMNS, []);
  let data = useMemo(() => tabledata, [tabledata]);

  useEffect(() => {
    const fetchData = async () => {
      setTableData(Data);
    };

    fetchData();
  }, []);

  // creating the table instance
  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getFooterGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
