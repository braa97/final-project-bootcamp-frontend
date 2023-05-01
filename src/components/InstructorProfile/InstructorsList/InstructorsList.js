import React from "react";
import "./InstructorsList.css";
import MessageIcon from "@mui/icons-material/Message";
import ApiManager from "../../../apiManager/apiManager";
import Constants from "../../../utilities/constantValues/constants";
import TopRightSnackbar from '../../MUI/TopRightSnackbar';

const InstructorsList = ({ instructors }) => {
  const apiManager = new ApiManager();
  const [open, setOpen] = React.useState(true);

  /*const sendMessageToRelative = async(number, name) => {
   
    let response = await apiManager.sendMessageToResidentRelativeContact(message);
    let type = 'error'
    if (response.data.status === 200) {
        type = 'success'
    }
    setOpen(true);
    return(
        <TopRightSnackbar snackbarContent={response.data.message} open={open} setOpen={setOpen} type={type} />
    )
  };*/

  return (
    <>
      <div className="instructors">
        <div className="instructors-card">
          <div className="instructors-card-header">
            <h3>Your Instructors</h3>
          </div>
          <div className="instructors-card-body">
            {instructors.map((instructor, i) => (
              <div className="instructors-instructor-container" key={i}>
                <div className="instructors-instructor-info">
                  <img
                    className="instructors-instructor-img"
                    src={instructor.image}
                  />
                  <div>
                    <h4>{instructor.name}</h4>
                    {/*<small>{instructor.contactNumber}</small>*/}
                  </div>
                </div>
                
                  <div className="instructors-contact-icon">
                    <span className="instructors-las instructors-la-phone"></span>
                  </div>
               
                <MessageIcon className="instructors-message-btn" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorsList;
