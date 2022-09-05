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
            <Typography>Hello, my name is Patrick Dolan and I love building fun, interactive, polished websites and user experiences. I'm working towards a career change from freelance art and delivery driving to frontend web development. I began this career change in 2021 and I'm looking for work where I can continue to learn and provide the best possible services I can.</Typography>
            <br />
            <Typography>Straight out of high school I went into the Information Technology field while attending classes at Clark College for computer support. I enjoyed working with computers and the myriad of problem solving situations they provided but a few years back I decided to shake things up and started working full time as a freelance artist. I learned a ton about self management and business during my time in professional art but It's time for another career change and I'm hoping to merge my love of computers with that of design which is why I enrolled at Epicodus (A full stack software development boot camp).</Typography>
            <br />
            <Typography>I've been absolutely loving the learning environment at Epicodus and I've learned a ton of different things like HTML, CSS, Javascript, Jest, Git, TDD,and more. I can't wait to start my career in software development where I can work with a team to create experiences users can't get enough of. If you have an opprotunity that you think I could bring value to please feel free to contact me at: dolanp1992@gmail.com or use the social links at the top of the page.</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default AboutMe;