import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import CoordinatorApiMan from "../../../../coordinatorApiManager/coordinatorApiMan";
import Grid from "@mui/material/Grid";
import Instructor from "./instructor";
import BeautifulButton from "./add_instructor";
export default function Instructors({ coordinatorId }) {
  const [instructors, setInstructors] = useState([]);
  const apiManager = new CoordinatorApiMan();
  const fetchInstructors = async function () {
    const response = await apiManager.getInstructors(coordinatorId);
    const coordinator = await response.json();
    setInstructors(coordinator.instructors);
  };
  useEffect(() => {
    fetchInstructors();
  }, []);
  const deleteInstructor = async function(instructorId){
    await apiManager.deleteInstructor(instructorId)
    fetchInstructors()
  }
  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{ mt: 4, mb: 4, display: "flex", justifyContent: "flex-end" }}
      >
        <BeautifulButton
          text={"create instructors"}
          coordinatorId={coordinatorId}
          fetchInstructors={fetchInstructors}
        />
      </Container>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {instructors.map((i) => {
            return (
              <Grid item key={i._id} xs={12} sm={6} md={4}>
                <Instructor key={i._id} instructor={i} deleteEvent={deleteInstructor}/>{" "}
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
