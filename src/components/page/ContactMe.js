import { useRef, useState } from "react";
import { Alert, Button, Container, Paper, Snackbar, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SendIcon from '@mui/icons-material/Send';
import emailjs from "emailjs-com";

const ContactMe = () => {
  const theme = useTheme();
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const form = useRef();

  const handleSuccessSnackbar = () => {
    setSuccessOpen(true);
  }
  
  const handleErrorSnackbar = () => {
    setErrorOpen(true);
  }

  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
        return;
    }

    setSuccessOpen(false);
  };

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
        return;
    }

    setErrorOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_EMAILSERVICEID, process.env.REACT_APP_EMAILJS_EMAILTEMPLATEID, e.target, process.env.REACT_APP_EMAILJS_EMAILPUBLICKEY)
      .then((result) => {
        handleSuccessSnackbar();
        console.log(result.text);
      }, (error) => {
        handleErrorSnackbar();
          console.log(error.text);
      });
    
    e.target.reset();
  };
  
  return (
    <>
    <Container maxWidth="md" sx={{color: theme.palette.primary.contrastText, py: "4em"}}>
      <Paper sx={{
        py: "1em", 
        px: "1em"
      }}>
        <Typography variant="h4" textAlign={"center"}>Contact Me</Typography>
        <form ref={form} onSubmit={sendEmail}>
          <TextField
            id="filled-name"
            label="Name"
            name="name"
            margin="normal"
            
            fullWidth
            required
          />
          <TextField
            id="filled-name"
            label="Email"
            name="user_email"
            margin="normal"
            type="email"
            fullWidth
            required
          />
          <TextField
            id="filled-name"
            label="Message"
            name="message"
            margin="normal"
            multiline
            minRows={4}
            maxRows={6}
            fullWidth
            required
          />
          <Button
            variant="contained"
            color="secondary"
            endIcon={<SendIcon />}
            type="submit"
          >
            Send message
          </Button>
        </form>
      </Paper>
      <Snackbar 
        autoHideDuration={4000}
        message="Your message was successfully sent"
        open={successOpen}
        onClose={handleSuccessClose}
      >
        <Alert onClose={handleSuccessClose} severity="success" sx={{backgroundColor: "green", color: "white"}}>
          Your message was successfully sent
        </Alert>
      </Snackbar>
      <Snackbar 
        autoHideDuration={4000}
        message="Something went wrong with when sending your message."
        open={errorOpen}
        onClose={handleErrorClose}
      >
        <Alert onClose={handleErrorClose} severity="error" sx={{backgroundColor: "red", color: "white"}}>
          Something went wrong with when sending your message.
        </Alert>
      </Snackbar>
    </Container>
    </>
  )
}

export default ContactMe;