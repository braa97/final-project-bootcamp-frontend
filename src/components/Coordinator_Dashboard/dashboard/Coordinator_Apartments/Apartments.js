import React, { useEffect, useState } from "react";
import CoordinatorApiMan from "../../../../coordinatorApiManager/coordinatorApiMan";

export default function Apartments({ coordinatorId }) {
  const [apartments, setApartments] = useState([]);
  useEffect(() => {
    const apiManager = new CoordinatorApiMan();
    const fetchApartments = async () => {
      const response = await apiManager.getCoordinatorApartments(coordinatorId);
      const apartments = await apartments.json();
      setApartments(apartments);
    };
    fetchApartments();
  }, []);
  return <div>Apartments</div>;
}
