import React from 'react';

const FeedbackSection = () => {
  const feedbackData = [
    {
      id: 1,
      name: 'Jody',
      feedback: '" I recently had the occasion to hire Mr. Staulbus for a holly  contested Guardianship matter . Mr. Staubus brought a rare combination of effectiveness , reasonanieness and understanding of the human element involved . Mr. Staubus handled all things in a calm , highly competent , effective and reasinable way  . It could not have been as easy as he made it seem  . He credited to Bar"',
    },
    {
      id: 2,
      name: 'Jane Smith',
      feedback: 'Nullam semper mauris in diam tincidunt, vel efficitur mi eleifend. Mauris suscipit tristique tellus, sit amet congue mi tempus id.',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      feedback: 'Fusce rhoncus, quam in viverra condimentum, sem elit dictum est, at iaculis sem tellus id odio. Pellentesque malesuada bibendum lacus.',
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1));
  };

  const activeFeedback = feedbackData[activeIndex];

  return (
    <div className="feedback-section" style={{ maxWidth: '1000px', margin: '0 auto', marginTop: '80px' }}>
  <div className="feedback-container" style={{ border: '2px solid orange', padding: '20px', position: 'relative', borderRadius: '10px', height: '200px', textAlign: 'center' }}>
    <div className="feedback-title" style={{ textAlign: 'center', position: 'absolute', top: '-35px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', borderRadius: '0px', width: 'fit-content', padding: '5px 20px' }}>
      <h2 style={{ marginTop: '10px', color: 'black', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>What They're Saying About Us</h2>
    </div>
    <div className="feedback-navigation" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', display: 'flex', justifyContent: 'space-between', width: '100%', marginLeft: '-20px', marginRight: '-20px' }}>
      <button onClick={handlePrevious}>&lt;</button>
      <button onClick={handleNext}>&gt;</button>
    </div>
    <p style={{ fontStyle: 'italic',marginBottom: '10px', fontSize: '14px' }}>{activeFeedback.feedback}</p>
    <p style={{ textAlign: 'right', fontWeight: 'bold',marginRight:'20px' }}>- {activeFeedback.name}</p>
    <div className="testimonials-button" style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)' }}>
      <button style={{ backgroundColor: 'orange', color: 'white', border: 'none', padding: '12px 40px', borderRadius: '5px', fontWeight: 'bold' }}>READ ALL TESTIMONIALS</button>
    </div>
  </div>
</div>

  
  
  
  );
};

export default FeedbackSection;






