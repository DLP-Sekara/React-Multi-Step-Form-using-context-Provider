import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import { MultiStepContext } from "../MultiStepContext/MultiStepContext";

function ThirdForm() {
  const { setCurrentStep, setuserData,userData, data, submitOnAction } =
    useContext(MultiStepContext);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Company"
            variant="outlined"
            name="comapny"
            value={data["comapny"]}
            onChange={(e) =>
              setuserData({ ...userData, [e.target.name]: e.target.value })
            }
            margin="normal"
            color="secondary"
          />
        </div>

        <div>
          <TextField
            label="City"
            variant="outlined"
            name="city"
            value={data["city"]}
            onChange={(e) =>
              setuserData({ ...userData, [e.target.name]: e.target.value })
            }
            margin="normal"
            color="secondary"
          />
        </div>

        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setCurrentStep(2)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
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
