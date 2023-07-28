import { Container, Grid, Typography } from "@mui/material";
import aboutMeImg from "../../assets/ropes-course.jpg";

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
            <Typography variant="body2">Greetings! I'm Patrick, a web enthusiast with a passion for building things online. Since childhood, I've been drawn to computers and fascinated by their workings, especially through video games.</Typography>
            <br />
            <Typography variant="body2">My journey took me into the realms of computer support and digital art as a freelancer. Today, as a full-stack web developer, I revel in the fulfillment of crafting functional and captivating websites. In 2022, I successfully completed a web development boot camp and an internship. Currently, I take pride in my role as a web development instructor at Fidgetech, a non-profit organization. Welcome to my portfolio, where you can witness the fruits of my dedication to the web!</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default AboutMe;