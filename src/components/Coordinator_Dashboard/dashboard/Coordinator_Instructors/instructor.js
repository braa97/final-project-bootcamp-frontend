import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

export default function instructor({ instructor }) {
  return (
    <div>
      <MyCard instructor={instructor} />
    </div>
  );
}
const MyCard = ({ instructor }) => {
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
            {instructor.name}
          </Typography>
        </div>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {instructor.email}
        </Typography>
        <hr style={{ margin: "16px 0" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton color="primary" aria-label="edit">
            <Edit />
          </IconButton>
          <IconButton color="secondary" aria-label="delete">
            <Delete />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};
