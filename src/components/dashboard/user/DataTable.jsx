import React, { useEffect, useContext, useMemo, useState } from "react";

// state context
import { StateContext } from "../../../context/StateContext";
import { COLUMNS } from "./Columns";
import "./Table.css";

// 3rd party
import { useTable, useGlobalFilter, usePagination } from "react-table";
import Filter from "./Filter";
import { useAuth0 } from "@auth0/auth0-react";
import { Switch, Route } from "react-router-dom";
import Doc from "./Doc";
const axios = require("axios").default;

const DataTable = () => {
  const { tableData } = useContext(StateContext);
  
  const [tabledata, setTableData] = tableData;

  const { user } = useAuth0()
  const [loading, setLoading] = useState(false)

  const columns = useMemo(() => COLUMNS, []);
  let data = useMemo(() => tabledata, [tabledata]);

  useEffect(() => {
    const fetchData = async () => {

      setLoading(true)
      const res = await axios.post('http://medh.herokuapp.com/getfile', {
        email: user.email
      })
      console.log('fetching');
      setTableData(res.data || []);
      setLoading(false)
    };

    fetchData();
  }, [user.email]);

  // creating the table instance and getting props

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable(
    {
      columns: columns,
      data: data,
      initialState: {
        hiddenColumns: ["_id"]
      }
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;


  return (
    <>
      <Filter filter={globalFilter} setFilter={setGlobalFilter} />
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
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          Viewing Page :{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          | Go to Page :{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value ? Number(e.target.value) : 0;
              gotoPage(pageNumber - 1);
            }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[2, 5,10, 25, 50].map((pageSize) => {
            return (
              <option key={pageSize} value={pageSize}>
                Show {pageSize} rows per page
              </option>
            );
          })}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
    </>
  );
};

export default DataTable;
