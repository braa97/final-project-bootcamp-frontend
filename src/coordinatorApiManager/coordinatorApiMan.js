import axios from "axios";

const CoordinatorApiMan = function () {
  const getCallWithFetch = async (url) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return await axios.get(url, {headers});
  };
  const postCallWithFetch = async (url, body) => {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json(); // Parse response body as JSON
    return data;
  };

  const deleteCallWithFetch = async (url) => {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };
  const getCoordinatorApartments = async function (id) {
    const apartments = await getCallWithFetch(
      `${process.env.REACT_APP_SERVER_ROUTE}/coordinator/coordinators/apartments/${id}`
    );
    return apartments;
  };
  const getInstructors = async function (id) {
    const instructors = await getCallWithFetch(
      `${process.env.REACT_APP_SERVER_ROUTE}/coordinator/coordinators/instructors/${id}`
    );
    return instructors;
  };
  const addNewInstructorToCoordinator = async function (id, instructor) {
    const response = await addNewInstructor(instructor);
    if (!response) {
      alert("user already exists");
      return;
    }
    const newInstructors = await postCallWithFetch(
      `${process.env.REACT_APP_SERVER_ROUTE}/coordinator/coordinators/instructors/${id}`,
      { instructorId: response.data._id }
    );
    return newInstructors;
  };
  const addNewInstructor = async function (instructor) {
    const newInstructors = await postCallWithFetch(
      `${process.env.REACT_APP_SERVER_ROUTE}/instructor/instructors`,
      { instructor: instructor }
    );
    return newInstructors;
  };
  const addShift = async function (newShift) {
    const response = await postCallWithFetch(
      `${process.env.REACT_APP_SERVER_ROUTE}/instructor/shifts/${newShift.selectedInstructor.id}`,
      newShift
    );
    return response;
  };

  const deleteInstructor = async (instructorId) => {
    const response = await deleteCallWithFetch(
      `${process.env.REACT_APP_SERVER_ROUTE}/instructor/${instructorId}`
    );
    return response;
  };

  const getResidentsByCoordinatorId = async (coordinatorId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_ROUTE}/coordinator/residents/${coordinatorId}`
    );
    return response;
  };

  return {
    getCoordinatorApartments,
    getInstructors,
    addNewInstructorToCoordinator,
    addShift,
    deleteInstructor,
    getResidentsByCoordinatorId,
  };
};
export default CoordinatorApiMan;
