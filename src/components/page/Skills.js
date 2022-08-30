import { Box, Container, Grid, Typography } from "@mui/material";
import Html5Icon from "../../assets/skills-icons/Html5Icon";
import Css3Icon from "../../assets/skills-icons/Css3Icon";
import JavascriptIcon from "../../assets/skills-icons/JavascriptIcon";
import ReactIcon from "../../assets/skills-icons/ReactIcon";
import MaterialUiIcon from "../../assets/skills-icons/MaterialUiIcon";
import GitIcon from "../../assets/skills-icons/GitIcon";
import GithubIcon from "../../assets/skills-icons/GithubIcon";
import FirebaseIcon from "../../assets/skills-icons/FirebaseIcon";

const Skills = () => {
  let boxSize = {height: "6em", width: "6em"}
  let iconStyles = {height: "5em", mx: "center"}

  return (
    <>
      <Container maxWidth="xl" sx={{mb: "2em"}}>
        <Typography variant="h4" sx={{textAlign: "center", mt: "2em", mb: "1em"}}>Skills</Typography>
        <Grid container direction="row" justifyContent={"center"} spacing={6}>
          <Grid item>
            <Box sx={boxSize}>
              <Html5Icon sx={iconStyles}/>
              <Typography variant="h6" sx={{textAlign: "center"}}>Html5</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={boxSize}>
              <Css3Icon sx={iconStyles}/>
              <Typography variant="h6" sx={{textAlign: "center"}}>CSS3</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={boxSize}>
              <JavascriptIcon sx={iconStyles}/>
              <Typography variant="h6" sx={{textAlign: "center"}}>Javascript</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={boxSize}>
              <ReactIcon sx={iconStyles}/>
              <Typography variant="h6" sx={{textAlign: "center"}}>React</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={boxSize}>
              <MaterialUiIcon sx={iconStyles}/>
              <Typography variant="h6" sx={{textAlign: "center"}}>MaterialUI</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={boxSize}>
              <GitIcon sx={iconStyles}/>
              <Typography variant="h6" sx={{textAlign: "center"}}>Git</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={boxSize}>
              <GithubIcon sx={iconStyles}/>
              <Typography variant="h5" sx={{textAlign: "center"}}>Github</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={boxSize}>
              <FirebaseIcon sx={iconStyles}/>
              <Typography variant="h5" sx={{textAlign: "center"}}>Firebase</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Skills;