import { Button } from '@mui/material'

function App() {
  return (
    <>

      <div style={{marginBottom: "30px"}}>
        
        <Button variant='contained'>A</Button>
        <Button variant='outlined'>B</Button>
        <Button variant='text'>C</Button>

      </div>

      <div style={{marginBottom: "30px"}}>

        <Button color='error' variant='contained'>A</Button>
        <Button color='info' variant='contained'>B</Button>
        <Button color='inherit' variant='contained'>C</Button>
        <Button color='primary' variant='contained'>D</Button>
        <Button color='secondary' variant='contained'>E</Button>
        <Button color='success' variant='contained'>F</Button>
        <Button color='warning' variant='contained'>G</Button>

      </div>

      <div>
        
        <Button size='large' variant='contained'>A</Button>
        <Button size='medium' variant='contained'>B</Button>
        <Button size='small' variant='contained'>C</Button>

      </div>
     
    </>
  );
}

export default App;
