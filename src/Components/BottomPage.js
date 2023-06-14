import React from 'react';
import { Box, Typography, Link, Grid, Avatar, TextField, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';

function BottomPage() {
  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="space-between" mx="200px" >
        <Box>
         <h3 style={{color:'grey'}}>LAWYER</h3>
          <Box display="flex" alignItems="center">
            <Link href="#">
              <Avatar  sx={{color:'orange', marginRight:'3px'}}>
                <FacebookIcon />
              </Avatar>
            </Link>
            <Link href="#">
              <Avatar sx={{color:'orange', marginRight:'3px'}}>
                <TwitterIcon />
              </Avatar>
            </Link>
            <Link href="#">
              <Avatar sx={{color:'orange', marginRight:'3px'}}>
                <LinkedInIcon />
              </Avatar>
            </Link>
            <Link href="#">
              <Avatar sx={{color:'orange', marginRight:'3px'}}>
                <PinterestIcon />
              </Avatar>
            </Link>
            <Link href="#">
              <Avatar sx={{color:'orange', marginRight:'3px'}}>
                <InstagramIcon />
              </Avatar>
            </Link>
          </Box>
        </Box>
        <Box>
            <h3>QUICK LINK</h3>
          <Link href="#">Home</Link><br/>
          <Link href="#">About Us</Link><br/>
          <Link href="#">Practice Areas</Link><br/>
          <Link href="#">Our Team</Link><br/>
          <Link href="#">Blog</Link><br/>
          <Link href="#">News& Resources</Link><br/>
          <Link href="#">Contact Us</Link><br/>
        </Box>
        <Box  sx={{ maxWidth: '300px' }}>
        <h3>GET IN TOUCH</h3>
          
          <Box display="flex" alignItems="center" margin="10px 0">
            <Avatar>
              <LocationOnIcon />
            </Avatar>
            <h5>Lawyer 123 N Central Expway ,Stp 210 Dollas TX 75225</h5>
          </Box>
          <Box display="flex" alignItems="center" margin="10px 0">
            <Avatar>
              <MailOutlineIcon />
            </Avatar>
            <h5>Infoglawyer@gmail.com</h5>
          </Box>
          <Box display="flex" alignItems="center" margin="10px 0">
            <Avatar>
              <PhoneIcon />
            </Avatar>
            <h5>214-691-3411</h5>
          </Box>
        </Box>
        <Box>
         <h3 >SUBSCRIBE TO US</h3>
          <Typography variant="body1">Get the latest tips and updates weekly</Typography>
          <Box display="flex" alignItems="center" marginTop="10px">
            <TextField label="Your Email" variant="outlined" />
            <IconButton style={{color:'orange'}}>
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default BottomPage;
