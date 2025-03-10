import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");

  console.log(city);

  return (
    <>
      <TextField
        label="Select city"
        variant="outlined"
        color="secondary"
        sx={{ width: "250px" }}
        select
        value={city}
        onChange={(e) => setCity(e.target.value)}
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
