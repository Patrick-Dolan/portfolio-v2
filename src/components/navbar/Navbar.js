import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import ComputerIcon from '@mui/icons-material/Computer';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <ComputerIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Patrick Dolan
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key="Skills" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <HashLink style={{textDecoration: "none", color: "black"}} to={`/Skills`}>
                    Skills
                  </HashLink>
                </Typography>
              </MenuItem>
              <MenuItem key="Projects" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <HashLink style={{textDecoration: "none", color: "black"}} to={`/$Projects`}>
                    Projects
                  </HashLink>
                </Typography>
              </MenuItem>
              <MenuItem key="AboutMe" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <HashLink style={{textDecoration: "none", color: "black"}} to={`/$AboutMe`}>
                    AboutMe
                  </HashLink>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <ComputerIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Patrick Dolan
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <HashLink style={{textDecoration: "none"}} to={`#skills`}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Skills
              </Button>
            </HashLink>
            <HashLink style={{textDecoration: "none"}} to={`#projects`}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Projects
              </Button>
            </HashLink>
            <HashLink style={{textDecoration: "none"}} to={`#aboutme`}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                About Me
              </Button>
            </HashLink>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button 
            variant="contained" 
            color="secondary"
            href="https://github.com/Patrick-Dolan" 
            target="_blank"
            startIcon={<GitHubIcon />}
            >
              Github
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
