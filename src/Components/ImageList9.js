/*import React from 'react';
import { Container, Typography, Button, ImageList, ImageListItem } from '@mui/material';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import RadarOutlinedIcon from '@mui/icons-material/RadarOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import backgroundimgsecond from './Layer 63.png'

const ImageList9= () => {
    const imageData = [
      { id: 1, icon: <FeedOutlinedIcon/>, title: 'Image 1' },
      { id: 2, icon : <HomeWorkOutlinedIcon/>, title: 'Image 2' },
      { id: 3, icon : <AccountBalanceOutlinedIcon/>, title: 'Image 3' },
      { id: 4, icon: <RadarOutlinedIcon/>, title: 'Image 4' },
      { id: 5, icon: <LocalAtmOutlinedIcon/>, title: 'Image 5' },
      { id: 6, icon: <ArticleOutlinedIcon/>, title: 'Image 6' },
      { id: 7, icon: <BackupTableOutlinedIcon/>, title: 'Image 7' },
      { id: 8, icon: <ReceiptLongOutlinedIcon/>, title: 'Image 8' },
      { id: 9, icon: <RecommendOutlinedIcon/>, title: 'Image 9' },
    ];
  
    return (
        <section
      className="backgroundimagesecond"
      style={{
        backgroundImage: `url(${backgroundimgsecond})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       
      }}
    >
        <Container className="image-list-container">
        <Typography variant="h4" className="heading-imagelist">
          Square Section Heading
        </Typography>
        <ImageList cols={3} rowHeight={200} className="image-list">
          {imageData.map((item) => (
            <ImageListItem key={item.id}>
              <div
                className={`image-box ${
                  [1, 3, 7, 9].includes(item.id) ? 'blue-background' : item.id === 5 ? 'orange-background' : ''
                }`}
              >
                <div className="icon">
                  {item.icon}
                </div>
                <Typography variant="body2" className="title">
                  {item.title}
                </Typography>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
        <Button variant="contained" color="primary" className="imagelist-button">
          View More
        </Button>
      </Container>
      </section>
    );
  }
  
  export default ImageList9;*/