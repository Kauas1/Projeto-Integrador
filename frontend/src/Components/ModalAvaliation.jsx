import { useState } from 'react';
import { Star } from 'lucide-react';

const StarRatingModal = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8B3A88'
  };

  const modalStyle = {
    padding: '2rem',
    borderRadius: '0.5rem',
    width: '24rem'
  };

  const titleStyle = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    letterSpacing: '0.05em'
  };

  const starContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.25rem'
  };

  const buttonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    padding: '0.25rem'
  };

  return (
    <div style={containerStyle}>
      <div style={modalStyle}>
        <h2 style={titleStyle}>DEIXE A SUA AVALIAÇÃO!</h2>
        
        <div style={starContainerStyle}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              style={buttonStyle}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              
            >
              <Star
                size={40}
                strokeWidth={1}
                fill={(hover || rating) >= star ? '#C340C3' : 'transparent'}
                color={(hover || rating) >= star ? '#C340C3' : 'white'}
              />
            </button>
          ))}
          <input type="button" value='enviar' onClick={(e) => [e.preventDefault(), window.location.href='/ ']}></input>
        </div>
      </div>
    </div>
  );
};

export default StarRatingModal;