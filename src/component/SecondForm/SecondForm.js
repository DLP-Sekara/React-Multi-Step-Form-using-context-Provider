import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import { MultiStepContext } from "../MultiStepContext/MultiStepContext";

function SecondForm() {
  const { setCurrentStep, setuserData,userData, data } = useContext(MultiStepContext);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={data["email"]}
            onChange={(e) =>
              setuserData({ ...userData, [e.target.name]: e.target.value })
            }
            margin="normal"
            color="secondary"
          />
        </div>

        <div>
          <TextField
            label="contact No"
            variant="outlined"
            name="contact"
            value={data["contact"]}
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
            onClick={() => setCurrentStep(1)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCurrentStep(3)}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SecondForm;
