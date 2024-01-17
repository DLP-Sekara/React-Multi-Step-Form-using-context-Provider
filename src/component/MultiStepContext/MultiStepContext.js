import React, { createContext, useState } from "react";

import "react-toastify/dist/ReactToastify.css";
export const MultiStepContext = createContext();

export const MultiStepProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setuserData] = useState([]);
  const [data, setData] = useState([]);

  function submitOnAction() {
    setData((data) => [...data, userData]);
    console.log("User Added Successfully! ", userData);
    setuserData("");
    setCurrentStep(1);
  }
  return (
    <>
      <div>
        <MultiStepContext.Provider
          value={{
            currentStep,
            setCurrentStep,
            userData,
            setuserData,
            data,
            setData,
            submitOnAction,
          }}
        >
          {children}
        </MultiStepContext.Provider>
      </div>
    </>
  );
};
