import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProfileImg from "../utilities/ProfileImg";

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
      <Container maxWidth="xl" sx={{color: theme.palette.primary.contrastText}}>
        <Grid container direction="row" display="flex" alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{
              px: "5em",
              py: "5em",
              my: "auto"
            }}>
              <Typography variant="subtitle2">Hello, my name is </Typography>
              <Typography variant="h3">Patrick Dolan.</Typography>
              <Typography variant="subtitle2">I'm a Jr. Frontend Web Developer</Typography>
              <Typography variant="caption">I build websites and apps like this one out of code and math. I spend most of my time programming, designing, and reading.</Typography><br />
              {/* TODO Set button to go to contact form */}
              <Button 
              sx={{
                mt: "2em"
              }} 
              variant="contained"
              color="secondary"
              endIcon={<ArrowForwardIcon />}
              >
                Contact Me
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box sx={{
              px: "2em",
              py: "2em",
            }}>
              <ProfileImg />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
  )
}

export default Banner;