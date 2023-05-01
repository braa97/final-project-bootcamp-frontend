import axios from "axios";

const ApiManager = function () {
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
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const response = await axios.post(url, body, {headers});
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const getResidentsByApartmentName = async (apartmentName) => {
    const response = await ajaxCall(`${process.env.REACT_APP_SERVER_ROUTE}/residents/${apartmentName}`);
    return response.data;
  };

  const getApartmentByName = async (apartmentName) => {
    const response = await ajaxCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/apartment/${apartmentName}`
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
    return response.data;
  };

  const getApartmentsByInstructorId = async (instructorId) => {
    const response = await ajaxCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/apartments/${instructorId}`
    );
    return response.data;
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
  const getInspections = async function (instructorId) {
    const response = await ajaxCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/instructor/residents/medicalAppointments/${instructorId}`
    );
    return response;
  };
  const addNewReport = async (reportData) => {
    const response = await ajaxPostCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/instructor/report`,
      reportData
    );
    return response.data;
  };

  const fetchReportsByInstructorId = async (requestObject) => {
    const response = await ajaxPostCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/instructor/reports`,
      requestObject
    );
    return response.data;
  };

  const getResidentsByInstructorId = async function (instructorId) {
    const response = await ajaxCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/instructor/residents/${instructorId}`
    );
    return response.data;
  };
  const getResidentsbirthdays = async function (instructorId) {
    const response = await ajaxCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/instructor/residents/birthdays/${instructorId}`
    );
    return response.data;
  };

  const getInstructorByInstructorID = async function (instructorId) {
    const response = await ajaxCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/instructor/${instructorId}`
    );
    return response.data;
  };

  const getInstructorById = async function (instructorId) {
    const response = await ajaxCall(
      `${process.env.REACT_APP_SERVER_ROUTE}/instructor/${instructorId}`
    );
    return response.data;
  };

  return {
    getResidentsByApartmentName,
    getApartmentByName,
    getResidentById,
    getResidentDetailsByQueryString,
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
    getResidentsByInstructorId,
    getInspections,
    fetchReportsByInstructorId,
    addNewReport,
    getResidentsbirthdays,
    getInstructorByInstructorID,
    getInstructorById,
  };
};

export default ApiManager;
