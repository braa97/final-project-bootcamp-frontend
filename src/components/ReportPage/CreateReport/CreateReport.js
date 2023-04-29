import { Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import StepForm from "../StepForm/StepForm";
import { AppProvider } from "../StepForm/Context";
import { useParams } from "react-router";

export default function CreateReport() {
  const { apartmentName } = useParams();
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <AppProvider>
          <StepForm apartmentName={apartmentName}/>
        </AppProvider>
      </Paper>
    </Container>
  );
}
