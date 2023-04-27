import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <AppContext.Provider
      value={{
        activeStep,
        setActiveStep,
        handleNext,
        handleBack,
        variant: 'outlined',
        margin: 'normal',
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
