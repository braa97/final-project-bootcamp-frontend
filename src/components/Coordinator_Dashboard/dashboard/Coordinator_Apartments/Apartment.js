import { React, useState } from "react";
import { Card, CardContent, Collapse } from "@mui/material";

export default function Apartment() {
  return (
    <div>
      <MyCard />
    </div>
  );
}

function MyCard() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent onClick={handleExpandClick}>
        <h2>Card Title</h2>
        <p>Card Content</p>
      </CardContent>
      <Collapse in={expanded}>
        <CardContent>
          <p>Additional Content Here</p>
        </CardContent>
      </Collapse>
    </Card>
  );
}
