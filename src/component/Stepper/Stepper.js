/* eslint-disable default-case */
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import FirstForm from "../FirstForm/FirstForm";
import SecondForm from "../SecondForm/SecondForm";
import ThirdForm from "../ThirdForm/ThirdForm";
import { MultiStepContext } from "../MultiStepContext/MultiStepContext";
const steps = ["Fill Form One", "Fill Form Two", "Fill Form Three"];

export default function HorizontalLinearAlternativeLabelStepper() {
  const { currentStep } = React.useContext(MultiStepContext);
  function renderForm(step) {
    switch (step) {
      case 1:
        return <FirstForm />;
      case 2:
        return <SecondForm />;
      case 3:
        return <ThirdForm />;
    }
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={currentStep-1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {renderForm(currentStep)}
    </Box>
  );
}
