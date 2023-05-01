import React, { useEffect, useState } from "react";
import InfoWidget from "../InfoWidget/InfoWidget";
import ApartmentsList from "../ApartmentsList/ApartmentsList";
import InstructorList from '../InstructorsList/InstructorsList'
import ProfileCard from "../ProfileCard/ProfileCard";
import "./InstructorProfile.css";
// import CDN from "../../ApartmentInfo/CDN";
import { useParams } from "react-router";
import Utility from "../../../utilities/utility/util";
import ApiManager from "../../../apiManager/apiManager";
import ResidentsTable from "../../ApartmentInfo/ResidentsTable/ResidentsTable";
import ApartmentsTable from "../../ApartmentsTable/ApartmentsTable";
const LINE_AWESOME_CDN =
  "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css";

const InstructorProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const [apartments, setApartments] = useState([]);
  const [residents, setResidents] = useState([]);
  const [instructor,setInstructor] = useState([]);
  const apiManager = new ApiManager();

  useEffect(() => {
    fetchInstructorsData();
  },[]);

  const fetchInstructorsData = async () => {
    console.log(user);
    let apartmentsData = await apiManager.getApartmentsByInstructorId(user?.userId);
    let residentsData = await apiManager.getResidentsByInstructorId(user?.userId);
    let instructorData = await apiManager.getInstructorByInstructorID(user?.userId);
    setInstructor(instructorData)
    setApartments(apartmentsData)
    setResidents(residentsData)

   //setInstructors(response.instructors);
   // setCoordinator(response)

  };

  /*const getApartmentsNum = () => {
    let numApart = 0
    for (let instructor of instructors) {
      numApart += instructor.apartments.length
    }
    return numApart
  }*/

    return (
      <>
        <div className="instructor-profile main">
          <ProfileCard
            img={instructor.image}
            name={instructor.name}
            IDNmber={instructor.instructorId}
            phoneNumber={instructor.phoneNumber}
           />
          <div className="instructor-profile cards">
            <InfoWidget
              value={residents.length}
              title="Number Of Residents"
              icon="las la-clipboard-list"
            />
            <InfoWidget
              value={apartments.length}
              title="Number Of Apartments"
              icon="las la-clipboard-list"
            />
          </div>

          <div className="instructor-profile recent-grid"> 
           <ResidentsTable residents={residents}/>
         
          </div> 
          <div className="instructor-profile recent-grid"> 
          <ApartmentsTable apartments={apartments} />
         
          </div> 
          
          
        </div>
      </>
    );
  
};

export default InstructorProfile;
