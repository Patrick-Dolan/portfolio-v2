import Navbar from "./navbar/Navbar"
import { Grid, Typography } from "@mui/material"

function App() {
  return (
    <>
    <Grid container>
        <Navbar />
      <Grid item>
      </Grid>
      <Grid item>
        <Typography variant="h3" >App Component</Typography>
      </Grid>
    </Grid>
    </>
  );
}

export default App;
