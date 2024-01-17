import { Button, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MultiStepContext } from "../MultiStepContext/MultiStepContext";

function ThirdForm() {
  const { setCurrentStep, setuserData,userData, data, submitOnAction } =
    useContext(MultiStepContext);

  const handleSubmit = (event) => {
    event.preventDefault();
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
            value={userData["comapny"]}
            onChange={(e) =>
              setuserData({ ...userData, [e.target.name]: e.target.value })
            }
            margin="normal"
            color="secondary"
            required
          />
        </div>

        <div>
          <TextField
            label="City"
            variant="outlined"
            name="city"
            type="text"
            value={userData["city"]}
            onChange={(e) =>
              setuserData({ ...userData, [e.target.name]: e.target.value })
            }
            margin="normal"
            color="secondary"
            required
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
            onClick={() => submitOnAction()}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ThirdForm;
