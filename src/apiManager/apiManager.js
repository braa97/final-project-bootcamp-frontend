import axios from "axios";

const ApiManager = function () {
  //Create try and catch

  //make a better error handling function
  const ajaxCall = async(url) => {
    try {
      let response = await axios.get(url)
      return response
    }
    catch(error) {
      console.log(error);
      return error
    }
  }

  const getResidentsByApartmentName = async(apartmentName) => {
    const response = await ajaxCall(process.env.REACT_APP_RESIDENTS_ROUTE + `/${apartmentName}`);
    return response.data
  };

  const getApartments = async() => {
    const response = await ajaxCall(process.env.REACT_APP_APARTMENTS_ROUTE);
    return response.data
  };

  const getApartmentByName = async(apartmentName) => {
    const response = await ajaxCall(`${process.env.REACT_APP_SINGLE_APARTMENT_ROUTE}` + `/${apartmentName}`)
    return response.data
  }

  const getResidentById = async(residentId) => {
    const response = await ajaxCall(`${process.env.REACT_APP_SERVER_ROUTE}/resident/${residentId}`)
    return response.data
  }

  const getResidentDetailsByQueryString = async(residentId, queryString) => {
    const response = await ajaxCall(`${process.env.REACT_APP_SERVER_ROUTE}/resident/${residentId}?${queryString}=true`)
    return response.data
  }

  const getResidentMedicalAppointments = async(residentId) => {
    const response = await ajaxCall(`${process.env.REACT_APP_SERVER_ROUTE}/resident/medicalAppointment/${residentId}`)
    return response.data
  }

  const addMedicalAppointment = async(residentId, newMedicalAppointment) => {
    console.log(residentId)
    const res = await axios.put(process.env.REACT_APP_SERVER_ROUTE  + `/resident/medicalAppointment/${residentId}`, {newAppointment: newMedicalAppointment});
    return res
  }


  return {
    getResidentsByApartmentName: getResidentsByApartmentName,
    getApartments: getApartments,
    getApartmentByName: getApartmentByName,
    getResidentById: getResidentById,
    getResidentDetailsByQueryString: getResidentDetailsByQueryString,
    getResidentMedicalAppointments,
    addMedicalAppointment,
  };
};

export default ApiManager;
