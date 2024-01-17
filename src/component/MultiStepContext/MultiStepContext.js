import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const MultiStepContext = createContext();

export const MultiStepProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setuserData] = useState([]);
  const [data, setData] = useState([]);

  function submitOnAction() {
    setData((data) => [...data, userData]);
    if (toast) {
      toast.success("User Added Successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    console.log(userData);
    setuserData("");
    setCurrentStep(1);
  }
  return (
    <><div>
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
    </div><ToastContainer /></>
    
  );
};
