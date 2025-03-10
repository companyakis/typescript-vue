import TextField from "@mui/material/TextField";

import MoodIcon from "@mui/icons-material/Mood";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

import InputAdornment from "@mui/material/InputAdornment";

function App() {
  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <TextField
          label="Name"
          variant="filled"
          value={"Lorem"}
          color="info"
          disabled
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <TextField
          label="Name"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="end">
                  <MoodIcon />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <TextField
          label="Age"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccessAlarmIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <TextField
          label="Weight"
          variant="outlined"
          color="success"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            },
          }}
        />
      </div>
    </>
  );
}

export default App;
