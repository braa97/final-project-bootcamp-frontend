const CoordinatorApiMan = function () {
  const getCallWithFetch = async (url) => {
    return await fetch(url, {
      method: "GET",

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
  return {
    getCoordinatorApartments,
  };
};
export default CoordinatorApiMan;
