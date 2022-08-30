import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";


const ProjectCard = (props) => {
  const {title, description, githubLink, liveLink, imgLocation, imgAltText} = props.project;

  console.log(imgLocation)
  return(
    <>
      <Card sx={{ 
        maxWidth: 345, 
        height: "100%",
        display: "flex",
        flexDirection : "column",
      }}
      >
        <CardMedia
          component="img"
          height="200"
          image={imgLocation}
          alt={imgAltText}
        >
          
        </CardMedia>
        <CardContent >
          <Typography 
            gutterBottom 
            variant="h5" 
            component="div"
          >
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{marginTop: "auto"}}>
          <Button 
            variant="text" 
            color="secondary" 
            size="small" 
            href={githubLink} 
            target="_blank" 
            sx={{mr: ".5em"}}
            >
              Source Code
            </Button>
          {/* Conditionally render liveLink if one is available */}
          {(liveLink == null) 
            ? 
              null 
            : 
              <Button 
                variant="text" 
                color="secondary" 
                size="small" 
                href={liveLink} 
                target="_blank"
                >
                  Link to live if possible
                </Button> 
          }
        </CardActions>
      </Card>
    </>
  )
}

export default ProjectCard;