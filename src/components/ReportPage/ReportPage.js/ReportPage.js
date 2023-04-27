import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";
import "./ReportPage.css";

function createData(name, apartment, instructor, date) {
  return { name, apartment, instructor, date };
}

const rows = [
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
  createData("Gingerbread", 356, 16.0, 49),
];

export default function ReportPage() {
  const navigate = useNavigate()
  const createNewReport = () => {
    navigate('/apartments', {state: {location: "ReportPage"}})
  };

  return (
    <div className="report-container">
      <div className="report-page-header">
        <h1>Reports</h1>
        <button className="create-new-report" onClick={createNewReport}>
          Create New Report
        </button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Report Name</TableCell>
              <TableCell align="left">Apartment</TableCell>
              <TableCell align="left">Instructor</TableCell>
              <TableCell align="left">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.apartment}</TableCell>
                <TableCell align="left">{row.instructor}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
