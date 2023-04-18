import axios from "axios";

const ApiManager = function () {
  //Create try and catch

  //Create get Data function that calls axios and implement it in each function
  const ajaxCall = async (url) => {
    try {
      let response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getResidentsByApartmentName = async (apartmentName) => {
    const response = await ajaxCall(
      process.env.REACT_APP_RESIDENTS_ROUTE + `/${apartmentName}`
    );
    return response;
  };

  const getApartments = async () => {
    const response = await ajaxCall(process.env.REACT_APP_APARTMENTS_ROUTE);
    return response;
  };

  const getApartmentByName = async (apartmentName) => {
    const response = await ajaxCall(
      `${process.env.REACT_APP_SINGLE_APARTMENT_ROUTE}` + `/${apartmentName}`
    );
    return response;
  };
  const getResidentDetails = async (residentId) => {
    const response = await ajaxCall(
      `${process.env.REACT_APP_RESIDENT_DETAILS_ROUTE}` + `/${residentId}`
    );
    return response;
  };

  return {
    getResidentsByApartmentName: getResidentsByApartmentName,
    getApartments: getApartments,
    getApartmentByName: getApartmentByName,
    getResidentDetails: getResidentDetails,
  };
};

export default ApiManager;
