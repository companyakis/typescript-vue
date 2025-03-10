import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function App() {
  const people = [
    { label: "Ayhan Bilir", age: 34 },
    { label: "Bengü Göğebakan", age: 24 },
    { label: "Bilgehan Ay", age: 65 },
    { label: "Sevda Büyükhan", age: 47 },
    { label: "Aygün Arslan", age: 35 },
  ];

  return (
    <>
      <Autocomplete
        sx={{ width: "200px" }}
        options={people}
        renderInput={(params) => <TextField {...params} label="People" />}
      ></Autocomplete>
    </>
  );
}

export default App;
