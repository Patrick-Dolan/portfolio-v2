import { Grid, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialLinks = (props) => {
  const { secondaryColor } = props;
  const theme = useTheme();

  let iconColor =  theme.palette.primary.main;

  if (secondaryColor === "secondary") {
    iconColor = theme.palette.secondary.main
  } 

  if (secondaryColor === "contrast") {
    iconColor = theme.palette.primary.contrastText
  }

  return(
    <Grid container justifyContent={"start"} textAlign={"center"}>
      <Link
        href="https://github.com/Patrick-Dolan"
        target="_blank"
        sx={{
          mr: "1em"
        }}
      >
        <GitHubIcon fontSize={"large"} sx={{color: iconColor}} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/patrickleedolan/"
        target="_blank"
      >
        <LinkedInIcon fontSize={"large"} sx={{color: iconColor}} />
      </Link>
    </Grid>
  )
}

export default SocialLinks;