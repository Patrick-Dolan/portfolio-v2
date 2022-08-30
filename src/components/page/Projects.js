import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import ProjectCard from "../projects/ProjectCard";
import * as projects from "../../projects-info";
import GithubIcon from "../../assets/skills-icons/GithubIcon";

const Projects = () => {
  const theme = useTheme();

  return(
    <>
      <Container maxWidth="xl" sx={{color: theme.palette.primary.contrastText, py: "2em"}}>
        <Typography variant="h4" sx={{textAlign: "center", pt: "1em", pb: "1em"}}>Projects</Typography>
        <Grid container direction="row" justifyContent={"center"} spacing="16">
          <Grid item>
            <ProjectCard project={projects.droneAttack} />
          </Grid>
          <Grid item>
            <ProjectCard project={projects.catfish} />
          </Grid>
          <Grid item>
            <ProjectCard project={projects.pierresMarket} />
          </Grid>
        </Grid>
        <Box sx={{
          textAlign: "center",
          mt: "2em"
        }}>
          <Button 
          variant="contained" 
          color="secondary" 
          startIcon={<GitHubIcon />}
          href="https://github.com/Patrick-Dolan" 
          target="_blank" 
          >
            Check out more of my work on Github
          </Button>
        </Box>
      </Container>
    </>
  )
}

export default Projects;