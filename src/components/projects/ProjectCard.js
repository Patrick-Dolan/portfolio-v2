import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
import ProjectDialog from "../dialogs/ProjectDialog";

const ProjectCard = (props) => {
  const {title, description, githubLink, liveLink, imgLocation, imgAltText} = props.project;
  const [open, setOpen] = useState(false);

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
            variant="outlined" 
            color="secondary" 
            size="small" 
            href={githubLink} 
            target="_blank" 
            sx={{mr: ".5em"}}
            startIcon={<OpenInNewIcon />}
          >
            Source Code
          </Button>
          <Button 
            variant="outlined" 
            color="secondary" 
            size="small" 
            sx={{mr: ".5em"}}
            startIcon={<InfoIcon />}
            onClick={() => setOpen(true)}
          >
            Learn More
          </Button>
          <ProjectDialog
            open={open}
            setOpen={setOpen}
            project={props.project}
          />
          {/* Conditionally render liveLink if one is available */}
          {(liveLink == null) 
            ? 
              null 
            : 
              <Button 
                variant="outlined" 
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