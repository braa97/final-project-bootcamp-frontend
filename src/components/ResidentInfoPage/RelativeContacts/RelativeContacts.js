import React from "react";
import "./RelativeContacts.css";
import MessageIcon from "@mui/icons-material/Message";
import ApiManager from "../../../apiManager/apiManager";
import Constants from "../../../utilities/constantValues/constants";
import TopRightSnackbar from '../../MUI/TopRightSnackbar';

const RelativeContacts = ({ contacts, resident }) => {
  const apiManager = new ApiManager();
  const [open, setOpen] = React.useState(true);

  const sendMessageToRelative = async(number, name) => {
    const phoneNumber =
      `${Constants.ISRAEL_DIALING_CODE}` + number.replace("-", "").substring(1);
    const message = {
      body: `Hello ${name}.\nWe are trying to contact you in regard to your relative ${resident.firstName} ${resident.lastName}\nPlease contact us when possible`,
      contactNumber: phoneNumber,
    };
    let response = await apiManager.sendMessageToResidentRelativeContact(message);
    let type = 'error'
    if (response.data.status === 200) {
        type = 'success'
    }
    setOpen(true);
    return(
        <TopRightSnackbar snackbarContent={response.data.message} open={open} setOpen={setOpen} type={type} />
    )
  };

  return (
    <>
      <div className="contacts">
        <div className="card">
          <div className="card-header">
            <h3>Relative Contacts</h3>
          </div>
          <div className="card-body">
            {contacts.map((c, i) => (
              <div className="contact-container" key={i}>
                <div className="contact-info">
                  <img
                    className="contact-img"
                    src="https://static.thenounproject.com/png/1095867-200.png"
                  />
                  <div>
                    <h4>{c.name}</h4>
                    <small>{c.contactNumber}</small>
                  </div>
                </div>
                <a href={`tel: ${c.contactNumber}`}>
                  <div className="contact-icon">
                    <span className="las la-phone"></span>
                  </div>
                </a>
                <MessageIcon className="message-btn" onClick={() => sendMessageToRelative(c.contactNumber, c.name)}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RelativeContacts;
