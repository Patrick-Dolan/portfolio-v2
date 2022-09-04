import { Box, Container, Divider, Grid, Link, Typography } from "@mui/material"
import DraftsIcon from '@mui/icons-material/Drafts';
import DescriptionIcon from '@mui/icons-material/Description';
import { useTheme } from "@mui/material/styles";
import SocialLinks from "../utilities/SocialLinks";

const Footer = () => {
  const copyrightYear = new Date().getFullYear();
  const theme = useTheme();

  return(
    <Container maxWidth="md" sx={{py: "4em"}}>
      <Grid container direction={"row"} justifyContent={"space-evenly"} textAlign={"start"}>
        <Grid item xs={12} sm={6} md={6} sx={{pb: "1em"}}>
          <Grid container textAlign={"start"}>
            <Grid item>
              <DraftsIcon fontSize="large" sx={{color: theme.palette.secondary.main, mr: ".3em"}} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">Email Me</Typography>
              <Typography variant="body2">dolanp1992@gmail.com</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{pb: "1em"}}>
          <Grid container textAlign={"start"}>
            <Grid item>
              <DescriptionIcon fontSize="large" variant="text" sx={{color: theme.palette.secondary.main, mr: ".3em"}} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">View Resume</Typography>
              <Link 
                href="https://docs.google.com/document/d/1n6zcrTg9HeJRh8DTf6DAg1k1qkhxSH-wUlXKPTYXPLo/edit?usp=sharing"
                target="_blank"
                color="secondary" 
              >
                <Typography variant="body2">Resume</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Grid container justifyContent={"space-evenly"} textAlign={"start"} >
        <Grid item md={6} sx={{mt: "2em"}}>
          {/* TODO setup links */}
          <Link href="#" underline="hover">
            <Typography variant="caption">Skills</Typography>
          </Link>
          <br />
          <Link href="#" underline="hover">
            <Typography variant="caption">Projects</Typography>
          </Link>
          <br />
          <Link href="#" underline="hover">
            <Typography variant="caption">About Me</Typography>
          </Link>
          <br />
          <Link href="#" underline="hover">
            <Typography variant="caption">Contact Me</Typography>
          <br />
          </Link>
        </Grid>
        <Grid item md={6} textAlign="start">
          <SocialLinks />
        </Grid>
      </Grid>
      <Box sx={{
        textAlign: "center",
        mt: "3em"
      }}>
        <Typography variant="caption" sx={{mt: "3em"}}>Copyright © {copyrightYear} Patrick Dolan</Typography>
      </Box>
    </Container>
  )
}

export default Footer;