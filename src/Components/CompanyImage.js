import React from 'react';
import imageLogos from './Layer 57.png';

function CompanyImage() {
  return (
    <div className='Logo-Images' style={{ display: 'flex', justifyContent: 'center', marginTop: '70px' }}>
    <img src={imageLogos} alt='logo images' style={{ maxWidth: '100%', height: 'auto' }} />
  </div>
  );
}

export default CompanyImage;


