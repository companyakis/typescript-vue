import { Button } from '@mui/material'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import AttachFileIcon from '@mui/icons-material/AttachFile';

function App() {
  return (
    <>
      <div>

        <Button size='large' variant='contained' color='success' startIcon={<AddAlertIcon />}>Click</Button>
        <Button size='large' variant='outlined' color='inherit' endIcon={<AttachFileIcon />}>Add</Button>
       
      </div>

    </>
  );
}

export default App;
