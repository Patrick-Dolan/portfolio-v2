import { useRef, useEffect } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ProjectDialog = (props) => {
  const {open, setOpen } = props;
  // TODO flesh out project dialog modals with remaing information
  const {title, description, githubLink, liveLink, imgLocation, imgAltText} = props.project;


  const handleClose = () => {
    setOpen(false);
  };

  // TODO Figure out what this description element thing is
  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby={`${title}`}
        aria-describedby={`${description}`}
        fullWidth={false}
        maxWidth="lg"
      >
        <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* Decide whether to use these buttons for live and github links? */}
          <Button 
            variant="outlined" 
            size="small" 
            onClick={handleClose}
            color="secondary" 
          >
            Close
          </Button>
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
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProjectDialog;