import Navbar from "./navbar/Navbar"
import { Box, ThemeProvider } from "@mui/material"
import { theme } from "../Theme/index";
import Banner from "./LandingPage/Banner";

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box sx={{bgcolor: theme.palette.primary.main}}>
        <Banner />
      </Box>
      <Skills />
    </ThemeProvider>
    </>
  );
}

export default App;
