import React from "react";
import "./AddNewApartment.css";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const inputs = [
  {
    id: 1,
    label: "Apartment ID",
    type: "text",
    placeholder: "Apa14",
  },
  {
    id: 2,
    label: "Apartment Name",
    type: "text",
    placeholder: "Arno Dorian",
  },
  {
    id: 5,
    label: "Budget",
    type: "number",
    placeholder: "3200",
  },
];

const addNewResident = () => {};

const NewResident = () => {
  const [file, setFile] = useState("");
  return (
    <>
      <div className="new-apartment-content">
        <div className="new-apartment-container">
          <div className="top-page">
            <h1>Add New Apartment</h1>
          </div>
          <div className="bottom-page">
            <div className="img-container">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <form>
              <div className="form-input">
                <div>
                  <label htmlFor="file" className="flexbox-upload-photo-icon">
                    <DriveFolderUploadOutlinedIcon
                      color="primary"
                      fontSize="large"
                      className="upload-img-icon"
                    />
                    <span className="upload-photo-label">Apartment Photo</span>
                  </label>
                </div>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="form-input" key={input.id}>
                  <label>{input.label}</label>
                  {input.type === "select" ? (
                    <select name={input.label}>
                      {input.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input type={input.type} placeholder={input.placeholder} />
                  )}
                </div>
              ))}
              <button onClick={addNewResident}>Add</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewResident;
