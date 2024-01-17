import { Button, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MultiStepContext } from "../MultiStepContext/MultiStepContext";

function SecondForm() {
  const [emailError, setemailError] = useState("");
  const [contactError, setcontactError] = useState("");

  const { setCurrentStep, setuserData, userData } =
    useContext(MultiStepContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    //field validation
    const emailRegex = /^[A-z 2-9]+@[A-z 2-9]+\.[A-z 2-9]+$/;
    const contactRegex = /^[0-9.]{10}$/;
    setemailError("");
    setcontactError("");

    if (userData.email.match(emailRegex)) {
      if (userData.contact.match(contactRegex)) {
        setCurrentStep(3);
      } else {
        setcontactError("Enter valid contact");
      }
    } else {
      setemailError("Enter valid email");
    }
    
  };
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    userData.email && userData.contact
      ? setDisabled(false)
      : setDisabled(true);
  }, [userData]);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={userData["email"] || ""}
            type="email"
            onChange={(e) =>
              setuserData({ ...userData, [e.target.name]: e.target.value })
            }
            margin="normal"
            color="secondary"
            required
            error={emailError !== ""}
            helperText={emailError}
          />
        </div>

        <div>
          <TextField
            label="contact No"
            variant="outlined"
            name="contact"
            type="number"
            value={userData["contact"] || ""}
            onChange={(e) =>
              setuserData({ ...userData, [e.target.name]: e.target.value })
            }
            margin="normal"
            color="secondary"
            required
            error={contactError !== ""}
            helperText={contactError}
          />
        </div>

        <div>
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: 5 }}
            onClick={() => setCurrentStep(1)}
          >
            Back
          </Button>
          <Button
            disabled={disabled}
            variant="contained"
            color="primary"
            style={{ margin: 5 }}
            type="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SecondForm;
