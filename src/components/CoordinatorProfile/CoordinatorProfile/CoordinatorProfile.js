import React, { useEffect, useState } from "react";
import InfoWidget from "../InfoWidget/InfoWidget";
import ApartmentsList from "../ApartmentsList/ApartmentsList";
import InstructorList from '../InstructorsList/InstructorsList'
import ProfileCard from "../ProfileCard/ProfileCard";
import "./CoordinatorProfile.css";
import { useParams } from "react-router";
import ApiManager from "../../../apiManager/apiManager";
const LINE_AWESOME_CDN =
  "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css";

const CoordinatorProfile = () => {
  const { coordinatorID } = useParams();
  const [instructors, setInstructors] = useState([]);
  const [coordinator, setCoordinator] = useState([]);
  const apiManager = new ApiManager();

  useEffect(() => {
    fetchInstructorsData();
  },[coordinatorID,coordinator,instructors]);

  const fetchInstructorsData = async () => {
    let coordinatorData = await apiManager.getCoordinatorByCoordinatorID(coordinatorID);
    let instructorData = await apiManager.getInstructorsDataByCoordinatorID(coordinatorID)
   setInstructors(instructorData.instructors);
    setCoordinator(coordinatorData)

  };

  const getApartmentsNum = () => {
    let numApart = 0
    for (let instructor of instructors) {
      numApart += instructor.apartments.length
    }
    return numApart
  }
 
    return (
      <>
        <div className="main">
          <ProfileCard
            img={coordinator.image}
            name={coordinator.fullName}
            IDNmber={coordinator.id}
            phoneNumber={coordinator.phoneNumber}
            email={coordinator.email}
          />
          <div className="cards">
            <InfoWidget
              value={instructors.length}
              title="Number Of Instructors"
              icon="las la-clipboard-list"
            />
            <InfoWidget
              value={getApartmentsNum()}
              title="Number Of Apartments"
              icon="las la-clipboard-list"
            />
          </div>

          <div className="recent-grid"> 
           <ApartmentsList instructors={instructors} />
            <InstructorList instructors={instructors} />
          </div>
        </div>
      </>
    );
  
};

export default CoordinatorProfile;
