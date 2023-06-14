import React from 'react';
import Backgroundimg from './Layer 97.png';


const GroupPhoto = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="background-image">
        <img src={Backgroundimg} alt="Image" />

        </div>
        <div className="content-box">
  <span className="white-text">DECADES OF KNOWLEDGE AND EXPERIENCE</span>
  <br />
  <span className="orange-text">IN ESTATE LITIGATION</span>
</div>

      </div>
    </section>
  );
}

export default GroupPhoto;
