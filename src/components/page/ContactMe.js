import { useRef } from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SendIcon from '@mui/icons-material/Send';
import emailjs from "emailjs-com";

const ContactMe = () => {
  const theme = useTheme();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_EMAILSERVICEID, process.env.REACT_APP_EMAILJS_EMAILTEMPLATEID, e.target, process.env.REACT_APP_EMAILJS_EMAILPUBLICKEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
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
    </Container>
    </>
  )
}

export default ContactMe;