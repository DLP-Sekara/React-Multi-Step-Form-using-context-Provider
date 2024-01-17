import { Button, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MultiStepContext } from "../MultiStepContext/MultiStepContext";

function FirstForm() {
  const { setCurrentStep, setuserData, userData, data } =
    useContext(MultiStepContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentStep(2);
  };
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {;
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
            value={userData["firstName"]}
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
            label="Second name"
            variant="outlined"
            name="secondName"
            type="text"
            value={userData["secondName"]}
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
            label="Address"
            variant="outlined"
            name="address"
            type="text"
            value={userData["address"]}
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
