import "./ResidentDetails.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ApiManager from "../../apiManager/apiManager";

export default function ResidentDetails() {
  const { residentId } = useParams();
  const [resident, setResident] = useState([]);

  useEffect(() => {
    const apiManger = new ApiManager();

    const getResident = async() => {
      let tempResident = await apiManger.getResidentsByApartmentName(residentId);
      setResident(tempResident);
    };
    getResident();
  }, []);

  return (
    <div>ResidentDetails</div>
  )
}
