import React from 'react';
import image78 from './Layer 78.png';
import { Box, Avatar,Typography, } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

function LocationMap() {
  return (
    <div className='Logo-Images' style={{ display: 'flex', justifyContent: 'center',  margin: '50px 100px',maxHeight:'300px' }}>
    <div style={{ position: 'relative', width: '100%', maxHeight: '400px' }}>
        <div style={{ position: 'absolute', top: '0', left: '0', width: '20%', height: '100%', backgroundColor: 'rgba(128, 128, 128, 0.5)', display: 'flex', justifyContent: 'center', marginLeft:'200px',alignItems: 'center', flexDirection: 'column' }}>
          <h2 style={{color:'white'}}>Contact Us</h2>
          <hr style={{ borderTop: '2px solid orange', width: '20%', marginTop:'-20px', marginBottom: '5px', marginLeft:'70px' }} />
          <Box display="flex" alignItems="center" margin="10px 0">
            <Avatar>
              <LocationOnOutlinedIcon />
            </Avatar>
            <Typography variant="body1" style={{color:'white'}}>Lawyer 123 N Central Expway ,Stp 210 Dollas TX 75225</Typography>
          </Box>
          <Box display="flex" alignItems="center" margin="10px 0">
            <Avatar>
              <EmailOutlinedIcon />
            </Avatar>
            <Typography variant="body1" style={{color:'white'}}>Infoglawyer@gmail.com</Typography>
          </Box>
          <Box display="flex" alignItems="center" margin="10px 0">
            <Avatar>
              <LocalPhoneOutlinedIcon />
            </Avatar>
            <Typography variant="body1" style={{color:'white'}}>214-691-3411</Typography>
          </Box>
        </div>
        <img src={image78} alt='image78' style={{ maxWidth: '100%', height: 'auto',width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'  }} />
  </div>
  </div>
  );
}

export default LocationMap;