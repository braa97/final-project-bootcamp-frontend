import axios from "axios";

const ApiManager = function () {
  //Create try and catch

<<<<<<< HEAD
  //Create get Data function that calls axios and implement it in each function
  const ajaxCall = async (url) => {
=======
  //make a better error handling function
  const ajaxCall = async(url) => {
>>>>>>> 5d2c2417761fed912ea924cf1af5f8c9fe28e23a
    try {
      let response = await axios.get(url);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const getResidentsByApartmentName = async (apartmentName) => {
    const response = await ajaxCall(
      process.env.REACT_APP_RESIDENTS_ROUTE + `/${apartmentName}`
    );
    return response.data;
  };

  const getApartments = async () => {
    const response = await ajaxCall(process.env.REACT_APP_APARTMENTS_ROUTE);
    return response.data;
  };

  const getApartmentByName = async (apartmentName) => {
    const response = await ajaxCall(
      `${process.env.REACT_APP_SINGLE_APARTMENT_ROUTE}` + `/${apartmentName}`
    );
    return response.data;
  };

  const getResidentById = async (residentId) => {
    const response = await ajaxCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/resident/${residentId}`
    );
    return response.data;
  };

  const getResidentDetailsByQueryString = async (residentId, queryString) => {
    const response = await ajaxCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/resident/${residentId}?${queryString}=true`
    );
    return response.data;
  };

<<<<<<< HEAD
  const checkServerConnection = async () => {
    const response = await ajaxCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/status`
    );
    return response;
  };
=======
  const getResidentMedicalAppointments = async(residentId) => {
    const response = await ajaxCall(`${process.env.REACT_APP_SERVER_ROUTE}/resident/medicalAppointment/${residentId}`)
    return response.data
  }

  const checkServerConnection = async() => {
    const response = await ajaxCall(`${process.env.REACT_APP_SERVER_ROUTE}/status`)
    return response
  }
>>>>>>> 5d2c2417761fed912ea924cf1af5f8c9fe28e23a

  return {
    getResidentsByApartmentName: getResidentsByApartmentName,
    getApartments: getApartments,
    getApartmentByName: getApartmentByName,
    getResidentById: getResidentById,
    getResidentDetailsByQueryString: getResidentDetailsByQueryString,
    checkServerConnection: checkServerConnection,
    getResidentMedicalAppointments,
  };
};

export default ApiManager;
