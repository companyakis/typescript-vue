import Andromeda from "./images/and.jpeg";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <>
      <Card sx={{ maxWidth: 360 }}>
        <CardMedia
          component="img"
          alt="Andromeda"
          height="200"
          image={Andromeda}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Andromeda Galaxy
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae doloribus vitae dolor. Culpa tempora nisi commodi! Iste aspernatur quod unde mollitia beatae consectetur nam maxime!
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">Go There:)</Button>
          <Button size="small">More Info</Button>
        </CardActions>
        
      </Card>
    </>
  );
}

export default App;
