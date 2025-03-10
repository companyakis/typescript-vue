import TextField from '@mui/material/TextField';

function App() {
 

  return (
    <>

      <div style={{marginBottom:"10px"}}>
        <TextField label="Name" variant='filled' />
        <TextField label="City" variant='outlined' />
        <TextField label="Country" variant='standard' />
      </div>

      <div style={{marginBottom:"10px"}}>
        <TextField label="Name" variant='outlined' color='error' />
        <TextField label="Name" variant='outlined' color='info' />
        <TextField label="Name" variant='outlined' color='primary' />
        <TextField label="Name" variant='outlined' color='secondary' />
        <TextField label="Name" variant='outlined' color='success' />
        <TextField label="Name" variant='outlined' color='warning' />
      </div>

        
      <div style={{marginBottom:"10px"}}>
        <TextField label="Password" variant='standard' helperText="Don't share your password" color='primary' />
      </div>

      <div style={{marginBottom:"10px"}}>
        <TextField label="Amount" disabled variant='outlined' color='info' />
      </div>
      
    </>
  )
}

export default App
