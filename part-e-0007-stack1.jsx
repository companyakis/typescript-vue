import { Divider, Stack } from "@mui/material";

function App() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        divider={<Divider orientation="vertical" flexItem />}
        sx={{fontSize:"28px"}}
      >
        <div>İzmir</div>
        <div>Ankara</div>
        <div>İstanbul</div>
      </Stack>
    </>
  );
}

export default App;
