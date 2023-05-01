import React, { useEffect, useState } from "react";
import "./RelativeContacts.css";
import MessageIcon from "@mui/icons-material/Message";
import ApiManager from "../../../apiManager/apiManager";
import Constants from "../../../utilities/constantValues/constants";
import { Link } from "react-router-dom";
import Snackbar_Top_Right from "../../Helper-Components/Snackbar/Snackbar_Top_Right";

const RelativeContacts = ({ contacts, resident }) => {
  const apiManager = new ApiManager();
  const [snackbarProps, setSnackbarProps] = useState("");

  const sendMessageToRelative = async (number, name) => {
    const phoneNumber =
      `${Constants.ISRAEL_DIALING_CODE}` + number.replace("-", "").substring(1);
    const message = {
      body: `Hello ${name}.\nWe are trying to contact you in regard to your relative ${resident.firstName} ${resident.lastName}\nPlease contact us when possible`,
      contactNumber: phoneNumber,
    };
    let response = await apiManager.sendMessageToResidentRelativeContact(message);
    console.log(response);
    if (response) {
        setSnackbarProps({ message: "Your message has been sent!", severity: "success" });
    }
    else {
        setSnackbarProps({ message: "Something went wrong!", severity: "error" });
    }
  };

  useEffect(() => {
    if (snackbarProps) {
      const timer = setTimeout(() => {
        setSnackbarProps("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [snackbarProps]);

  return (
    <>
      <div className="contacts">
        <div className="card">
          <div className="card-header">
            <h3>Relative Contacts</h3>
          </div>
          <div className="card-body">
            {contacts.map((contact, i) => (
              <div className="contact-container" key={i}>
                <div className="contact-info">
                  <img
                    className="contact-img"
                    src="https://static.thenounproject.com/png/1095867-200.png"
                    alt=""
                  />
                  <div>
                    <h4>{contact.name}</h4>
                    <small>{contact.contactNumber}</small>
                  </div>
                </div>
                <div className="contact-buttons-flex">
                  <Link to={`tel: ${contact.contactNumber}`}>
                    <div className="contact-icon">
                      <span className="las la-phone"></span>
                    </div>
                  </Link>
                  <MessageIcon
                    className="message-btn"
                    onClick={() =>
                      sendMessageToRelative(contact.contactNumber, contact.name)
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {snackbarProps && <Snackbar_Top_Right props={snackbarProps} />}
    </>
  );
};

export default RelativeContacts;
