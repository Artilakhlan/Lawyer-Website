import React from 'react';
import Typography from '@mui/material/Typography';
import image67 from './Layer 67.png';
import { Box } from '@mui/material';

const ContactSection = () => {
  return (
    <Box
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        margin: '50px 100px',
        flex: '0 0 300px',
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img src={image67} alt="Example" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h1 style={{ color: 'black', textAlign: 'center', fontSize: '50px' }}>TIME TO GET SERIOUS</h1>
        </div>
      </div>

      <div style={{ backgroundColor: '#ebebe0', padding: '20px', width: '100%', height: '100%' }}>
        <Typography variant="h6" align="center" gutterBottom style={{ margin: '0 auto' }}>
          Contact An Attorney
        </Typography>
        <hr style={{ borderTop: '2px solid orange', width: '50px', margin: '10px auto' }} />
        <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'row', maxWidth: '300px', margin: '0 auto' }}>
          <div style={{ marginRight: '20px', flex: 1 }}>
            <input type="text" placeholder="First Name" style={{ width: '100%', padding: '5px', height: '40px' }} />
          </div>
          <div style={{ marginRight: '10px', flex: 1 }}>
            <input type="text" placeholder="Last Name" style={{ width: '100%', padding: '5px', height: '40px' }} />
          </div>
        </div>
        <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'row', maxWidth: '300px', margin: '0 auto' }}>
          <div style={{ marginRight: '20px', flex: 1 }}>
            <input type="text" placeholder="Phone" style={{ width: '100%', padding: '5px', height: '40px' }} />
          </div>
          <div style={{ marginRight: '10px', flex: 1 }}>
            <input type="text" placeholder="E-Mail" style={{ width: '100%', padding: '5px', height: '40px' }} />
          </div>
        </div>
        <div style={{ marginBottom: '10px', margin: '0 auto', maxWidth: '300px' }}>
          <select style={{ width: '100%', padding: '5px', height: '40px' }}>
            <option value="">Are you a new client?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button
          style={{
            width: '30%',
            backgroundColor: 'orange',
            color: 'white',
            padding: '5px',
            border: 'none',
            margin: '0 auto',
            height: '40px',
          }}
        >
          Send Information
        </button>
      </div>
    </Box>
  );
};

export default ContactSection;




