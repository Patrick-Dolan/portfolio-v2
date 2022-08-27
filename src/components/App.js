import Navbar from "./navbar/Navbar"
import { Grid, Typography } from "@mui/material"
import { ThemeProvider } from "@mui/material";
import { theme } from "../Theme/index";

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Grid container>
          <Navbar />
        <Grid item>
        </Grid>
        <Grid item>
          <Typography variant="h3" >App Component</Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
    </>
  );
}

export default App;
