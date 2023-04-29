import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";
import "./ReportPage.css";
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import ApiManager from "../../../apiManager/apiManager";
import Utility from "../../../utilities/utility/util";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#2e2e2e',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
          },
        },
      },
    },
  },
});


export default function ReportPage() {
  const utility = new Utility()
  const navigate = useNavigate()
  const apiManager = new ApiManager()
  const [reports, setReports] = useState([])

  const createNewReport = () => {
    navigate('/apartments', {state: {location: "ReportPage"}})
  };

  useEffect(() => {
    const instructorId = localStorage.getItem("instructorId")
    const fetchReportsFromDb = async(instructorId) => {
      const response = await apiManager.fetchReportsByInstructorId({instructorId: instructorId})
      setReports(response.reports)
    }
    fetchReportsFromDb(instructorId)
  }, [])

  return (
    <div className="report-container">
      <div className="report-page-header">
        <h1>Reports</h1>
        <ThemeProvider theme={theme}>
        <Button variant="contained" onClick={createNewReport}>Create New Report</Button>
        </ThemeProvider>
      </div>
      <TableContainer sx={{width: 850}} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Report Name</TableCell>
              <TableCell align="left">Apartment</TableCell>
              {/* <TableCell align="left">Instructor</TableCell> */}
              <TableCell align="left">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map((report) => (
              <TableRow
                key={report._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 ,width: 250} }}
              >
                <TableCell component="th" scope="row">
                  {report.reportName}
                </TableCell>
                <TableCell align="left">{report.apartmentName}</TableCell>
                {/* <TableCell align="left">{row.instructor}</TableCell> */}
                {/* {console.log(report.date)} */}
                
                <TableCell align="left">{utility.dateFormatter(report.date.slice(0, -1))}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
