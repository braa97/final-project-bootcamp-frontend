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
        <div className="card">
          <div className="card-header">
            <h3>Your Instructors</h3>
          </div>
          <div className="card-body">
            {instructors.map((instructor, i) => (
              <div className="instructor-container" key={i}>
                <div className="instructor-info">
                  <img
                    className="instructor-img"
                    src={instructor.image}
                  />
                  <div>
                    <h4>{instructor.name}</h4>
                    {/*<small>{instructor.contactNumber}</small>*/}
                  </div>
                </div>
                
                  <div className="contact-icon">
                    <span className="las la-phone"></span>
                  </div>
               
                <MessageIcon className="message-btn" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorsList;
