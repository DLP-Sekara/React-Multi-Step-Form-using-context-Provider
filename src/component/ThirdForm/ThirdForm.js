import { Button, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MultiStepContext } from "../MultiStepContext/MultiStepContext";

function ThirdForm() {
  const [cityError, setCityError] = useState("");
  const [comapnyError, setComapnyError] = useState("");

  const { setCurrentStep, setuserData, userData, submitOnAction } =
    useContext(MultiStepContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    //field validation
    const cityRegex = /^[A-z 0-9]{2,20}$/;
    const comapnyRegex = /^[A-z 0-9]{2,20}$/;
    setCityError("");
    setComapnyError("");

    if (userData.comapny.match(comapnyRegex)) {
      if (userData.city.match(cityRegex)) {
        submitOnAction();
      } else {
        setCityError("Enter valid city name");
      }
    } else {
      setComapnyError("Enter valid comapny name");
    }
  };
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    userData.comapny && userData.city ? setDisabled(false) : setDisabled(true);
  }, [userData]);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Company"
            variant="outlined"
            name="comapny"
            type="text"
            value={userData["comapny"] || ""}
            onChange={(e) =>
              setuserData({ ...userData, [e.target.name]: e.target.value })
            }
            margin="normal"
            color="secondary"
            required
            error={comapnyError !== ""}
            helperText={comapnyError}
          />
        </div>

        <div>
          <TextField
            label="City"
            variant="outlined"
            name="city"
            type="text"
            value={userData["city"] || ""}
            onChange={(e) =>
              setuserData({ ...userData, [e.target.name]: e.target.value })
            }
            margin="normal"
            color="secondary"
            required
            error={cityError !== ""}
            helperText={cityError}
          />
        </div>

        <div>
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: 5 }}
            onClick={() => setCurrentStep(2)}
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
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ThirdForm;
