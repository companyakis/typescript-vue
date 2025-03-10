import { Divider, Stack } from "@mui/material";

function App() {
  return (
    <>
      <Stack
        direction="column"
        spacing={3}
        divider={<Divider orientation="horizontal" flexItem />}
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
