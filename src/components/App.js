import Navbar from "./navbar/Navbar"
import { Grid, Typography, ThemeProvider, Container } from "@mui/material"
import { theme } from "../Theme/index";

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Grid container>
          <Navbar />
        <Grid item>
        </Grid>
        <Grid item>
          <Container maxWidth="lg">
            <Typography variant="h3" >App Component</Typography>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
    </>
  );
}

export default App;
