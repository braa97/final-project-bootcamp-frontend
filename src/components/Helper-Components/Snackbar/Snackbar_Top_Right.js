
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { useEffect, useState } from "react";

export default function Snackbar_Top_Right({ props }) {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  // const openSnackbar = () => () => {
  //   setIsSnackbarOpen(true);
  // };

  useEffect(() => {
    setIsSnackbarOpen(true);
  }, [])

  const closeSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={isSnackbarOpen}
        onClose={closeSnackbar}
        autoHideDuration={3000}
      >
        <Alert severity={props.severity}>{props.message}</Alert>
      </Snackbar>
    </div>
  );
}
