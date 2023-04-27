import axios from "axios";

const ApiManager = function () {
  //Create try and catch

  const ajaxCall = async (url) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      let response = await axios.get(url, { headers });
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const ajaxPutCall = async (url, object) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      let response = await axios.put(url, object, { headers });
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const ajaxDeleteCall = async (url) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      let response = await axios.delete(url, { headers });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const ajaxPostCall = async (url, body) => {
    try {
      const response = await axios.post(url, body);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getResidentsByApartmentName = async (apartmentName) => {
    const response = await ajaxCall(
      process.env.REACT_APP_RESIDENTS_ROUTE + `/${apartmentName}`
    );
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

  const getResidentMedicalAppointments = async (residentId) => {
    const response = await ajaxCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/resident/medicalAppointment/${residentId}`
    );
    return response.data;
  };

  const addMedicalAppointment = async (residentId, newMedicalAppointment) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const res = await axios.put(
      process.env.REACT_APP_SERVER_ROUTE +
        `/resident/medicalAppointment/${residentId}`,
      { newAppointment: newMedicalAppointment },
      { headers }
    );
    return res;
  };

  const updateAttendStatus = async (medicalAppointmentID) => {
    const res = await axios.put(
      process.env.REACT_APP_SERVER_ROUTE +
        `/resident/medicalAppointment/status/${medicalAppointmentID}`
    );
    return res;
  };

  const editMedicalAppointment = async (appointmentId, appointment) => {
    const response = await ajaxPutCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/resident/medicalAppointments/details/${appointmentId}`,
      { updatedAppointment: appointment }
    );
    return response;
  };

  const deleteAppointment = async (appointmentId, residentId) => {
    const response = await ajaxDeleteCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/resident/medicalAppointment/${appointmentId}?residentId=${residentId}`
    );
    return response;
  };

  const signIn = async (email, password) => {
    const response = await ajaxPostCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/instructor/sign-in`,
      { email, password }
    );
    return response;
  };

  const getApartmentsByInstructorId = async (instructorId) => {
    const response = await ajaxCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/apartments/${instructorId}`
    );
    return response.data;
  };

  const deleteInstructor = async (appointmentId, instructorId) => {
    const response = await ajaxDeleteCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/instructor/${instructorId}`
    );
    return response;
  };


  const sendMessageToResidentRelativeContact = async (message) => {
    const response = await ajaxPostCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/resident/contact`,
      message
    );
    return response;
  };
  const getInstructorShifts = async function (instructorId) {
    const response = await ajaxCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/instructor/shifts/${instructorId}`
    );
    return response;
  };
  const getApartmentName = async function (apartmentId) {
    const response = await ajaxCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/apartmentName/${apartmentId}`
    );
    return response;
  };
  return {
    getResidentsByApartmentName: getResidentsByApartmentName,
    getApartmentByName: getApartmentByName,
    getResidentById: getResidentById,
    getResidentDetailsByQueryString: getResidentDetailsByQueryString,
    getResidentMedicalAppointments,
    addMedicalAppointment,
    editMedicalAppointment,
    updateAttendStatus,
    deleteAppointment,
    signIn,
    getApartmentsByInstructorId,
    sendMessageToResidentRelativeContact,
    getInstructorShifts,
    getApartmentName,
    deleteInstructor
  };
};

export default ApiManager;
