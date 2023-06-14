import React from 'react';
import Image72 from './Layer 72.png';
import Image73 from './pimage.jpg';
import Image74 from './Layer 74.png';
import image75 from './Layer 75.png';
import Image76 from './Layer 76.png';

const TeamSection = () => {
  return (
    <div style={{  textAlign: 'center', marginTop: '50px', margin: '0 100px'  }}>
      <h2>Meet the Team</h2>
      <hr style={{ borderTop: '2px solid orange', width: '5%', margin: 'auto', marginBottom: '20px' }} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ margin: '0 10px' }}>
          <img src={Image72} alt="Team Member 1" style={{ width: '200px', height: '200px' }} />
          <h3>P.Kaith Staubus</h3>
        </div>
        <div style={{ margin: '0 10px' }}>
          <img src={Image73} alt="Team Member 2" style={{ width: '200px', height: '200px' }} />
          <h3>Ryan A.Randail</h3>
        </div>
        <div style={{ margin: '0 10px' }}>
          <img src={Image74} alt="Team Member 3" style={{ width: '200px', height: '200px' }} />
          <h3>Julie K blakenship</h3>
        </div>
        <div style={{ margin: '0 10px' }}>
          <img src={image75} alt="Team Member 4" style={{ width: '200px', height: '200px' }} />
          <h3>Diane F. Walker</h3>
        </div>
        <div style={{ margin: '0 10px' }}>
          <img src={Image76} alt="Team Member 5" style={{ width: '200px', height: '200px' }} />
          <h3>Joseph E. Legree</h3>
        </div>
      </div>
      <button style={{ backgroundColor: 'orange', color: 'white', padding: '10px', border: 'none', width: '220px', marginTop: '20px', borderRadius: '5px' }}>
        View All Attorneys
      </button>
    </div>
  );
};

export default TeamSection;
