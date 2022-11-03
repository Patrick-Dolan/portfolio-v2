import profilePicture from "../../assets/ProfilePictureV2.png"
import { Box } from "@mui/material"

const ProfileImg = () => {
  const style = {
    maxWidth: "90%",
    height: "100%",
  }
  
  return (
    <>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%"
      }}>
        <img style={style} alt="A headshot of Patrick Dolan" src={profilePicture} />
      </Box>
    </>
  )
}

export default ProfileImg;