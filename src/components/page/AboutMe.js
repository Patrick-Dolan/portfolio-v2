import { Container, Grid, Typography } from "@mui/material";
import aboutMeImg from "../../assets/ropes-course.jpg";

// TODO Rewrite whole about me section to be more concise and direct
const AboutMe = () => {
  return(
    <div id="aboutme">
      <Container maxWidth="xl" sx={{py: "4em"}}>
        <Grid container display="flex" alignItems="center" justifyContent="center" direction="row" spacing={10}>
          <Grid item>
            <img src={aboutMeImg} alt="Patrick at a ropes course." style={{height: "20em"}} />
          </Grid>
          <Grid item md={6}>
            <Typography variant="h4" textAlign={"center"}>About Me</Typography>
            <Typography>Hello, I'm Patrick, and I love building things for the web. I started my adventure as a developer in 2021 but feel like I've been working towards this craft for as long as I can remember. I've been drawn to computers since childhood and have been fascinated with how they work since I played my first video game.</Typography>
            <br />
            <Typography>That fascination is what led me to freelance in computer support and digital art. I've been working in both fields for the past few years building/repairing computers and networks and creating digital art assets for online creators and small businesses.</Typography>
            <br />
            <Typography>I had dabbled in programming before but until I really threw myself into web development I had never understood how intensely I enjoy building useful websites like the one you will find in this portfolio. I've just recently finished a full stack web development Bootcamp and am currently in my first internship but I'm looking for a junior developer position so I can start my career.</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default AboutMe;