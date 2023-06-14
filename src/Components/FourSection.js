import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import AddHomeWorkOutlinedIcon from '@mui/icons-material/AddHomeWorkOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

const FourSection = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
          marginRight: '200px',
          marginLeft: '200px',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            marginRight: '50px',
            marginLeft: '50px',
          }
          
        }}
      >
        <Box sx={{ width: '25%' }}>
          <Groups2OutlinedIcon sx={{ fontSize: 40 }} />
          <Typography variant="h6" className="Section-4">
            Will contests
          </Typography>
          <Typography variant="body2">
            Staubus Randall are experienced in handling will contest cases which are often very complex and fast-specific.
          </Typography>
          <ArrowForwardIcon style={{ color: 'orange' }} />
        </Box>
        <Box sx={{ width: '25%' }}>
          <Diversity1OutlinedIcon sx={{ fontSize: 40 }} />
          <Typography variant="h6" className="Section-4">
            Guardianships
          </Typography>
          <Typography variant="body2">
            Staubus Randall are experienced in handling will contest cases which are often very complex and fast-specific.
          </Typography>
          <ArrowForwardIcon style={{ color: 'orange' }} />
        </Box>
        <Box sx={{ width: '25%' }}>
          <AddHomeWorkOutlinedIcon sx={{ fontSize: 40 }} />
          <Typography variant="h6" className="Section-4">
            Estate planning
          </Typography>
          <Typography variant="body2">
            Staubus Randall are experienced in handling will contest cases which are often very complex and fast-specific.
          </Typography>
          <ArrowForwardIcon style={{ color: 'orange' }} />
        </Box>
        <Box sx={{ width: '25%' }}>
          <HandshakeOutlinedIcon sx={{ fontSize: 40 }} />
          <Typography variant="h6" className="Section-4">
            Trustee Disputes
          </Typography>
          <Typography variant="body2">
            Staubus Randall are experienced in handling will contest cases which are often very complex and fast-specific.
          </Typography>
          <ArrowForwardIcon style={{ color: 'orange' }} />
        </Box>
      </Box>
    </div>
  );
};

export default FourSection;
