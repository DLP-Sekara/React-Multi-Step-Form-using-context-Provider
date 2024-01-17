import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import { MultiStepContext } from "../MultiStepContext/MultiStepContext";

function FirstForm() {
  const { setCurrentStep, setuserData,userData, data } = useContext(MultiStepContext);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="First name"
            variant="outlined"
            name="firstName"
            value={data["firstName"]}
            onChange={(e) =>
              setuserData({ ...userData, [e.target.name]: e.target.value })
            }
            margin="normal"
            color="secondary"
          />
        </div>

        <div>
          <TextField
            label="Second name"
            variant="outlined"
            name="secondName"
            value={data["secondName"]}
            onChange={(e) =>
              setuserData({ ...userData, [e.target.name]: e.target.value })
            }
            margin="normal"
            color="secondary"
          />
        </div>

        <div>
          <TextField
            label="Address"
            variant="outlined"
            name="address"
            value={data["address"]}
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
            color="primary"
            onClick={() => setCurrentStep(2)}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FirstForm;
