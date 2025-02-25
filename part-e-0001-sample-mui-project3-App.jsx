import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Agent from "./assets/pictures/aiagent.jpg";
import DL from "./assets/pictures/dl.jpg";
import RL from "./assets/pictures/rl.jpg";
import Web3 from "./assets/pictures/web3.jpg";
import Areas from "./components/Areas";

function App() {
  return (
    <>
      <AppBar color="success">
        <Toolbar sx={{ fontSize: 25 }}>Important Areas</Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ marginTop: 12 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Areas
              image={DL}
              title={"Deep Learning"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam atque a porro voluptates voluptatem!"
              }
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Areas
              image={RL}
              title={"Reinforcement Learning"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam atque a porro voluptates voluptatem!"
              }
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Areas
              image={Web3}
              title={"Web3"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam atque a porro voluptates voluptatem!"
              }
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <Areas
              image={Agent}
              title={"AI Agent"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam atque a porro voluptates voluptatem!"
              }
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
