import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import { Button } from "@mui/material";

function App() {
  const [agreement, setAgreement] = useState(false);

  const handleAgreement = () => {
    if (!agreement) {
      alert("You have to agree!");
    } else {
      alert("Ok!");
    }
  };

  return (
    <>
      <FormControl component={"fieldset"}>
        <FormLabel sx={{ fontSize: "20px" }}>User Agreement</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={agreement} onChange={(e) => setAgreement(e.target.checked)} />}
            label="I agree the terms and conditions"
            labelPlacement="end"
          />

          <Button onClick={handleAgreement} variant="contained" color="success">Send</Button>
        </FormGroup>
      </FormControl>
    </>
  );
}

export default App;
