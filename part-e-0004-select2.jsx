import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

function App() {
  
  const [cities, setCities] = useState([]);

  //console.log(cities);

  return (
    <>
      <TextField
        label="Select city"
        variant="outlined"
        color="secondary"
        sx={{ width: "250px" }}
        select
        value={cities}
        onChange={(e) => setCities(e.target.value)}
        slotProps={{select:{multiple:true}}}
      >
        <MenuItem value="izmir">Izmir</MenuItem>
        <MenuItem value="ankara">Ankara</MenuItem>
        <MenuItem value="istanbul">Istanbul</MenuItem>
        <MenuItem value="adana">Adana</MenuItem>
      </TextField>
    </>
  );
}

export default App;
