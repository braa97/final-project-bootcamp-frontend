import React, { useEffect } from "react";
import ApiManager from "../../../../apiManager/apiManager";

export default function Apartments() {
  useEffect(() => {
    const apiManager = new ApiManager();
    const fetchApartments = async () => {};
    fetchApartments();
  });
  return <div>Apartments</div>;
}
