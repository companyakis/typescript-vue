import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function App() {

  return (
    <>

      <FormControl>
        <FormLabel sx={{fontSize: "30px"}}>Internal Titles</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Manager" labelPlacement='end' />
          <FormControlLabel control={<Checkbox />} label="Expert" labelPlacement='end' />
          <FormControlLabel control={<Checkbox />} label="Assistant" labelPlacement='end' />
        </FormGroup>
      </FormControl>
      
    </>
  );
}

export default App;
