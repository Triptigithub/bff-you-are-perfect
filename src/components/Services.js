


import React from 'react';
import './services.css';


const Card = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card-container ${isFlipped ? 'flipped' : ''}`} onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
      <div className="card-front">
        {frontContent}
      </div>
      <div className="card-back">
        {backContent}
      </div>
    </div>
  );
};







const Doc1= () => {
  return (
    
    <Card
    
      frontContent={<img src="/images/doc5.jpg" alt="Health icon" />}
      backContent={
        <>
          <h3>Dr.Robert</h3>
          <p>Stay active, eat a balanced diet, and get enough sleep to maintain good health.</p>
        </>
      }
    />
  );
};

const Doc2 = () => {
  return (
    <Card
      frontContent={<img src="/images/doc1.jpg" alt="Fitness icon" />}
      backContent={
        <>
          <h3>Dr.Charles</h3>
          <p>Stay fit by exercising regularly and incorporating strength training, cardio, and flexibility exercises into your routine.</p>
        </>
      }
    />
  );
};

const Doc3 = () => {
  return (
    <Card
      frontContent={<img src="/images/doc2.jpg" alt="Nutrition icon" />}
      backContent={
        <>
          <h3>Dr.Mariya</h3>
          <p>Eat a variety of fruits, vegetables, whole grains, and lean proteins to get the nutrients your body needs.</p>
        </>
      }
    />
  );
};

const CardLine = () => {
  return (
    <div className="card-line">
     
      <Doc1 />
      <Doc2 />
      <Doc3 />
    </div>
  );
};

export default CardLine;
