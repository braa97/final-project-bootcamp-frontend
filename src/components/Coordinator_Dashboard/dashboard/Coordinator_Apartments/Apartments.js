import React, { useEffect, useState } from "react";
import Apartment from "./Apartment";
import ApartmentsPage from "../../../ApartmentsPage/Apartments";

export default function Apartments({ apartments }) {
  return (
    <div>
      <ApartmentsPage coordinatorApartments={apartments} />
    </div>
  );
}
