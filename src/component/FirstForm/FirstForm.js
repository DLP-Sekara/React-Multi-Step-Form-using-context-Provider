import { Button, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MultiStepContext } from "../MultiStepContext/MultiStepContext";

function FirstForm() {
  const [firstNameError, setfirstNameError] = useState("");
  const [secondNameError, setsecondNameError] = useState("");
  const [addressError, setaddressError] = useState("");

  const { setCurrentStep, setuserData, userData } =
    useContext(MultiStepContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    //field validation
    const nameRegex = /^[A-z ]{2,20}$/;
    const addressRegex = /^[A-z ]{2,20}$/;
    setaddressError("");
    setsecondNameError("");
    setfirstNameError("");

    if (userData.firstName.match(nameRegex)) {
      if (userData.secondName.match(nameRegex)) {
        if (userData.address.match(addressRegex)) {
          setCurrentStep(2);
        } else {
          setaddressError("Enter valid address");
        }
      } else {
        setsecondNameError("Enter valid second name");
      }
    } else {
      setfirstNameError("Enter valid first name");
    }
  };
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    userData.firstName && userData.secondName && userData.address
      ? setDisabled(false)
      : setDisabled(true);
  }, [userData]);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="First name"
            variant="outlined"
            name="firstName"
            type="text"
            value={userData["firstName"] || ""}
            onChange={(e) =>
              setuserData({ ...userData, [e.target.name]: e.target.value })
            }
            margin="normal"
            color="secondary"
            required
            error={firstNameError !== ""}
            helperText={firstNameError}
          />
        </div>

        <div>
          <TextField
            label="Second name"
            variant="outlined"
            name="secondName"
            type="text"
            value={userData["secondName"] || ""}
            onChange={(e) =>
              setuserData({ ...userData, [e.target.name]: e.target.value })
            }
            margin="normal"
            color="secondary"
            required
            error={secondNameError !== ""}
            helperText={secondNameError}
          />
        </div>

        <div>
          <TextField
            label="Address"
            variant="outlined"
            name="address"
            type="text"
            value={userData["address"] || ""}
            onChange={(e) =>
              setuserData({ ...userData, [e.target.name]: e.target.value })
            }
            margin="normal"
            color="secondary"
            required
            error={addressError !== ""}
            helperText={addressError}
          />
        </div>
        <div>
          <Button
            disabled={disabled}
            variant="contained"
            color="primary"
            type="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FirstForm;
