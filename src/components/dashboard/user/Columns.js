import { Link } from "react-router-dom";

export const COLUMNS = [
  {
    Header: "Document Name",
    accessor: "name",
  },
  {
    Header: "Diagnosed By",
    accessor: "doctor",
  },
  {
    Header: "Date of Report",
    accessor: "date",
  },
  {
    Header: "Date Uploaded",
    accessor: "dateCreated",
  },
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    header: "",
    id: "click-me-button",
    Cell: props => <Link to={"/dashboard/" + props.data[props.cell.row.index]._id}>View More</Link>
      
      
    
  },
];
