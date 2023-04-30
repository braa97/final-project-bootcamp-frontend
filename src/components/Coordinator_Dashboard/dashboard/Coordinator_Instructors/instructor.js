import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import {  Delete } from "@mui/icons-material";
import EditButton from './editButton'

export default function instructor({ instructor, deleteEvent }) {
  return (
    <div>
      <MyCard instructor={instructor}  deleteEvent={deleteEvent}/>
    </div>
  );
}
const MyCard = ({ instructor, deleteEvent }) => {
  const handleDelete = function(){
    deleteEvent(instructor._id)
  }
  const [instructorData, setInstructorData] = useState(instructor)
  const updateInstructor = (instructor) => {
        setInstructorData(instructor)
  };

  return (
    <Card sx={{ maxWidth: 345, mb: 10 }}>
      <CardMedia
        component="img"
        height="200"
        image={instructor.image} // Replace with your own image URL
        alt="Example image"
      />
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ width: 40, height: 40 }}>
            {instructor.name.charAt(0)}
          </Avatar>
          <Typography gutterBottom variant="h5" component="div" sx={{ ml: 2 }}>
            {instructorData.name}
          </Typography>
        </div>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {instructorData.email}
        </Typography>
        <hr style={{ margin: "16px 0" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EditButton instructor={instructor} updateInstructor={updateInstructor}/>
          <IconButton color="secondary" aria-label="delete">
            <Delete onClick={handleDelete}/>
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};
