import { createContext, useState, useCallback } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  
  const [activeStep, setActiveStep] = useState(0);
  const [residentData, setResidentData] = useState({});
  const [emptyFields, setEmptyFields] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [stepTwoForumValues, setStepTwoForumValues] = useState({})
  const [stepTwoForumInput, setStepTwoForumInput] = useState([
    {
      id: 1,
      name: "classes",
      label: "Classes",
      type: "text",
      placeholder: "Classes the residents attended",
    },
    {
      id: 2,
      name: "meals",
      label: "Meals",
      type: "text",
      placeholder: "What meals did the residents have",
    },
    {
      id: 3,
      name: "events",
      label: "Group Events",
      type: "text",
      placeholder: "What additional group events were done if any"
    },
    {
      id: 4,
      name: "summary",
      label: "General Summary",
      type: "text",
      placeholder: "Summarize your work during your shift"
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
    const { name } = event.target
    updateTouchedFields((prevState) => ({ ...prevState, [name]: true }))
  }


  return (
    <AppContext.Provider
      value={{
        activeStep,
        setActiveStep,
        handleNext,
        handleBack,
        variant: 'outlined',
        margin: 'normal',
        residentData,
        emptyFields,
        touchedFields,
        updateResidentData,
        updateEmptyFields,
        updateTouchedFields,
        setResidentData,
        handleBlur,
        stepTwoForumValues,
        setStepTwoForumValues,
        stepTwoForumInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
