import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles"
import { HashLink } from "react-router-hash-link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkIcon from '@mui/icons-material/Link';
import ProfileImg from "../utilities/ProfileImg";
import SocialLinks from "../utilities/SocialLinks";

const Banner = () => {  
  const theme = useTheme();
  return (
    <>
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      width: "100%",
      alignItems: "stretch"
    }}>
      <Container maxWidth="md" sx={{color: theme.palette.primary.contrastText, py: "4em"}}>
        <Grid container direction="row-reverse" display="flex" alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
            <Box sx={{
              alignText: "center"
            }}>
              <ProfileImg />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{
              px: "3em",
              py: "3em",
              my: "auto"
            }}>
              <Typography variant="subtitle2">Hello, my name is </Typography>
              <Typography variant="h3">Patrick Dolan.</Typography>
              <Typography variant="subtitle2">I'm a Frontend Developer</Typography>
              <Typography variant="caption">I build websites like this one out of code and math. I spend most of my time programming, designing, and reading.</Typography><br />
              <HashLink smooth style={{textDecoration: "none", color: theme.palette.primary.lightText}} to={`#contactme`}>
                <Button 
                sx={{
                  mt: "2em",
                  minWidth: "15em"
                }} 
                variant="contained"
                color="secondary"
                endIcon={<ArrowForwardIcon />}
                >
                  Contact Me
                </Button>
              </HashLink>
              <br />
              <Button 
              sx={{
                mt: ".5em",
                minWidth: "15em"
              }} 
                variant="contained"
                color="secondary"
                href="https://docs.google.com/document/d/1n6zcrTg9HeJRh8DTf6DAg1k1qkhxSH-wUlXKPTYXPLo/edit?usp=sharing"
                target="_blank"
                endIcon={<LinkIcon />}
              >
                Resume
              </Button>
              <Box sx={{
                mt: "1em"
              }}
              >
                <SocialLinks secondaryColor="contrast" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
  )
}

export default Banner;