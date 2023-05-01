import React, { useEffect, useState } from "react";
import InfoWidget from "../InfoWidget/InfoWidget";
import ApartmentsList from "../ApartmentsList/ApartmentsList";
import InstructorList from "../InstructorsList/InstructorsList";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./CoordinatorProfile.css";
import { useParams } from "react-router";
import CoordinatorApiMan from "../../../coordinatorApiManager/coordinatorApiMan";
import ApiManager from "../../../apiManager/apiManager";

const CoordinatorProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [instructors, setInstructors] = useState([]);
  const [coordinator, setCoordinator] = useState([]);
  const [apartmentNumber, setApartmentNumber] = useState(null)
  const coordinatorApiMan = new CoordinatorApiMan();

  useEffect(() => {
    fetchInstructorsData();
  }, []);

  const fetchInstructorsData = async () => {
    let coordinatorData = await coordinatorApiMan.getCoordinatorByCoordinatorID(
      user.userId
    );
    let instructorData = await coordinatorApiMan.getInstructors(user.userId);
    instructorData = instructorData.data.instructors
    let numApart = 0
    for (let instructor of instructors) {
        numApart += instructor.apartments.length;
    }
    setApartmentNumber(numApart)
    setInstructors(instructorData);
    setCoordinator(coordinatorData);
  };

  return (
    <>
      <div className="coord-main">
        <ProfileCard
          img={coordinator.image}
          name={coordinator.fullName}
          IDNmber={coordinator.id}
          phoneNumber={coordinator.phoneNumber}
          email={coordinator.email}
        />
        <div className="coord-cards">
          <InfoWidget
            value={instructors?.length}
            title="Number Of Instructors"
            icon="las la-clipboard-list"
          />
          <InfoWidget
            value={apartmentNumber}
            title="Number Of Apartments"
            icon="las la-clipboard-list"
          />
        </div>
        <div className="coord-recent-grid">
          <ApartmentsList instructors={instructors} />
          <InstructorList instructors={instructors} />
        </div>
      </div>
    </>
  );
};

export default CoordinatorProfile;
