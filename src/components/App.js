import Navbar from "./navbar/Navbar";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "../Theme/index";
import Banner from "./page/Banner";
import Skills from "./page/Skills";
import Projects from "./page/Projects";
import AboutMe from "./page/AboutMe";

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box sx={{bgcolor: theme.palette.primary.main}}>
        <Banner />
      </Box>
      <Skills />
      <Box sx={{bgcolor: theme.palette.primary.main}}>
        <Projects />
      </Box>
      <AboutMe />
    </ThemeProvider>
    </>
  );
}

export default App;
