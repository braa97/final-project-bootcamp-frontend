import { createContext, useState, useCallback } from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [residentData, setResidentData] = useState({});
  const [emptyFields, setEmptyFields] = useState({});
  const [apartment, setApartment] = useState({})
  const [touchedFields, setTouchedFields] = useState({});
  const [personalPlans, setPersonalPlans] = useState({});
  const [generalActivities, setGeneralActivities] = useState({});
  const [personalPlansForumInput, setPersonalPlansForumInput] = useState([
    {
      id: 1,
      name: "classes",
      icon: <SelfImprovementIcon />,
      label: "Classes",
      type: "text",
      placeholder: "Classes the residents attended",
    },
    {
      id: 2,
      name: "meals",
      icon: <FastfoodIcon />,
      label: "Meals",
      type: "text",
      placeholder: "What meals did the residents have",
    },
    {
      id: 3,
      name: "events",
      icon: <Diversity3Icon />,
      label: "Group Events",
      type: "text",
      placeholder: "What additional group events were done if any",
    },
    {
      id: 4,
      name: "summary",
      icon: <SummarizeIcon />,
      label: "General Summary",
      type: "text",
      placeholder: "Summarize your work during your shift",
    },
  ]);
  const [generalActivitiesForumInput, setGeneralActivitiesForumInput] = useState([
    {
      id: "laundry",
      name: "laundry",
      label: "Laundry",
      type: "checkbox",
    },
    {
      id: "cleaningToiletsAndShowers",
      name: "cleaningToiletsAndShowers",
      label: "Cleaning toilets and showers",
      type: "checkbox",
    },
    {
      id: "emptyBin",
      name: "emptyBin",
      label: "Empty bin",
      type: "checkbox",
    },
    {
      id: "arrangingClosetsAndRooms",
      name: "arrangingClosetsAndRooms",
      label: "Arranging closets and rooms",
      type: "checkbox",
    },
    {
      id: "drugsGiving",
      name: "drugsGiving",
      label: "Drugs giving",
      type: "checkbox",
    },
    {
      id: "teethBrushing",
      name: "teethBrushing",
      label: "Teeth brushing",
      type: "checkbox",
    },
    {
      id: "glassesCleaning",
      name: "glassesCleaning",
      label: "Glasses cleaning",
      type: "checkbox",
    },
  ]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const updateResidentData = (data) => {
    setResidentData((prevState) => ({ ...prevState, ...data }));
  };

  const updateEmptyFields = (data) => {
    setEmptyFields((prevState) => ({ ...prevState, ...data }));
  };

  const updateTouchedFields = (data) => {
    setTouchedFields((prevState) => ({ ...prevState, ...data }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    updateTouchedFields((prevState) => ({ ...prevState, [name]: true }));
  };

  return (
    <AppContext.Provider
      value={{
        activeStep,
        setActiveStep,
        handleNext,
        handleBack,
        variant: "outlined",
        margin: "normal",
        residentData,
        emptyFields,
        touchedFields,
        updateResidentData,
        updateEmptyFields,
        updateTouchedFields,
        setResidentData,
        handleBlur,
        personalPlans,
        setPersonalPlans,
        personalPlansForumInput,
        generalActivitiesForumInput,
        generalActivities,
        setGeneralActivities,
        apartment,
        setApartment,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
