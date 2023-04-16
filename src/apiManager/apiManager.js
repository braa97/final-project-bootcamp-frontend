import axios from "axios";
import env from "react-dotenv";

const ApiManager = function () {
  //Create try and catch

  //Create get Data function that calls axios and implement it in each function

  const getResidentsByApartmentName = async function (apartmentName) {
    const response = await axios.get(process.env.REACT_APP_RESIDENTS_ROUTE + `/${apartmentName}`);
    return response.data;
  };

  const getApartments = async function () {
    const response = await axios.get(process.env.REACT_APP_APARTMENTS_ROUTE);
    return response.data;
  };

  return {
    getResidentsByApartmentName: getResidentsByApartmentName,
    getApartments: getApartments,
  };
};

export default ApiManager;
