import Grid from '@mui/material/Grid2';

function App() {
  return (
    <>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 5, xl: 7}}>Item 1</Grid>
        <Grid size={{ xs: 12, md: 4, xl: 3 }}>Item 2</Grid>
        <Grid size={{ xs: 12, md: 3, xl: 2 }}>Item 3</Grid>
      </Grid>

    </>
  );
}

export default App;
