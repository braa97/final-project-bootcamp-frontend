import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CoordinatorApiMan from "../../../../coordinatorApiManager/coordinatorApiMan";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditInstructor({
  instructor,
  handleClose,
  open,
  updateInstructorState,
}) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const instructorIdRegex = /^\d{9}$/;
  const signatureRegex = /^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[a-z]).{5,}$/;
  const phoneNumberRegex = /^05[0-8]\d{7}$/;
  const nameRegex = /^.{3,}$/; // name must be at least 3 characters

  const errors = {
    email: "Please enter a valid email address",
    instructorId: "Instructor ID must be 9 digits",
    signature:
      "Signature must contain at least one uppercase letter, two digits, and be at least 5 characters long",
    phoneNumber: "Phone number must be 10 digits and start with 05",
    password: "Password must be at least 6 characters with at least 2 digits",
    name: "Name must be at least 3 characters",
  };
  const [formData, setFormData] = useState({
    instructorId: instructor.instructorId,
    name: instructor.name,
    signature: instructor.signature,
    email: instructor.email,
    phoneNumber: instructor.phoneNumber,
  });

  const [validationErrors, setValidationErrors] = React.useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateFormData = () => {
    let validationErrors = {};
    if (!emailRegex.test(formData.email)) {
      validationErrors.email = errors.email;
    }
    if (!instructorIdRegex.test(formData.instructorId)) {
      validationErrors.instructorId = errors.instructorId;
    }
    if (!signatureRegex.test(formData.signature)) {
      validationErrors.signature = errors.signature;
    }
    if (!phoneNumberRegex.test(formData.phoneNumber)) {
      validationErrors.phoneNumber = errors.phoneNumber;
    }
    if (!nameRegex.test(formData.name)) {
      validationErrors.name = errors.name;
    }
    setValidationErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const apiManager = new CoordinatorApiMan();
    const isValid = validateFormData();
    if (isValid) {
      toast.success("Instructor updated successfully!");
      await apiManager.updateInstructor(formData, instructor._id);
      updateInstructorState(formData)
      handleClose();
    } else {
      toast.error("Please correct the form errors!");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Instructor</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            required
            fullWidth
            margin="normal"
            name="instructorId"
            label="Instructor ID"
            value={formData.instructorId}
            error={Boolean(validationErrors.instructorId)}
            helperText={validationErrors.instructorId}
            onChange={handleInputChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="name"
            label="Name"
            value={formData.name}
            error={Boolean(validationErrors.name)}
            helperText={validationErrors.name}
            onChange={handleInputChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="signature"
            label="Signature"
            value={formData.signature}
            error={Boolean(validationErrors.signature)}
            helperText={validationErrors.signature}
            onChange={handleInputChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="email"
            label="Email"
            value={formData.email}
            error={Boolean(validationErrors.email)}
            helperText={validationErrors.email}
            onChange={handleInputChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="phoneNumber"
            label="Phone Number"
            value={formData.phoneNumber}
            error={Boolean(validationErrors.phoneNumber)}
            helperText={validationErrors.phoneNumber}
            onChange={handleInputChange}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
