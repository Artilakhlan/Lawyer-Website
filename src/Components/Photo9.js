import * as React from 'react';
import { Typography, Button, ImageList, ImageListItem } from '@mui/material';
import { Container } from '@mui/material';

import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import RadarOutlinedIcon from '@mui/icons-material/RadarOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import backgroundImage from './Layer 63.png';

function Photo9() {
  const iconData = [
    { iconName: <FeedOutlinedIcon style={{ color: 'orange' }} />, title: 'Ancillary Probate', color: 'white' },
    { iconName: <HomeWorkOutlinedIcon style={{ color: 'orange' }} />, title: 'Estate Administration',  },
    { iconName: <AccountBalanceOutlinedIcon style={{ color: 'orange' }} />, title: 'Fiduciary Litigation', color: 'white' },
    { iconName: <RadarOutlinedIcon style={{ color: 'orange' }} />, title: 'International Probate',  },
    { iconName: <LocalAtmOutlinedIcon  style={{ color: 'white' }} />, title: 'Inheritence Rights', color: ' orange' },
    { iconName: <ArticleOutlinedIcon style={{ color: 'orange' }} />, title: 'Power of Attorney Disputes',  },
    { iconName: <BackupTableOutlinedIcon style={{ color: 'orange' }} />, title: 'Probate Litigation', color: 'white' },
    { iconName: <ReceiptLongOutlinedIcon style={{ color: 'orange' }} />, title: 'Probating Wills', },
    { iconName: <RecommendOutlinedIcon style={{ color: 'orange' }} />, title: 'Trust Modification', color: 'white' },
  ];

  const boxSize = '150px'; // Adjust the size as needed

  return (
    <div style={{ margin: '40px', position: 'relative', maxWidth: '100%', marginLeft: '100px', marginRight:'100px' }}>
      <div style={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '110%', overflow: 'hidden' }}>
        <img src={backgroundImage} alt="Background" style={{ width: '100%', height: '110%', objectFit: 'cover' }} />
      </div>

      <Container style={{ position: 'relative', padding: 0, maxWidth: '100%' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: '1',
           
            borderRadius: '0px',
          }}
        >
          <Typography variant="h5" align="center" gutterBottom style={{ marginTop: '20px' }}>
            Our Practice Areas
          </Typography>
          <hr style={{ borderTop: '2px solid orange', width: '50px', margin: 'auto', marginTop: '1px' }} />
          <div style={{ overflow: 'hidden' }}>
          <ImageList variant="standard" cols={3} rowHeight="auto" gap={0}>
  {iconData.map((item) => (
    <ImageListItem key={item.title}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: boxSize,
          width: boxSize,
          borderRadius: '0px',
          backgroundColor: item.color,
          padding: '0px',
          boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.16)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {item.iconName}
          <Typography variant="subtitle1">{item.title}</Typography>
        </div>
      </div>
    </ImageListItem>
  ))}
</ImageList>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
            <Button variant="contained" color="primary" style={{ backgroundColor: 'orange' }}>
              View All Practices
            </Button>
          </div>
        </div>
      </Container>
    </div>
    
  );
}

export default Photo9;
