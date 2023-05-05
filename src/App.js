import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

const Button = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timer, setTimer] = useState(0);

  const handleSubmit = () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    
    // Manually update timer value as if receiving 0-100% values
    setTimeout(() => {
      setTimer(15);
    }, 1200);
  
    setTimeout(() => {
      setTimer(75); 
    }, 2000);

    setTimeout(() => {
      setTimer(100);
    }, 2800);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 3300);
  };

  
  const buttonClass = isSubmitting ? 'btn do-submit' : 'btn btn-green btn-lg';

  return (
    <div>
      <button id="js-btn" className={buttonClass} onClick={handleSubmit}>
        <span className="text">{isSubmitting ? 'Submitting' : 'Submit'}</span>
        <div className="timer">
          <svg id="js-timer" viewBox="0 0 120 120" xmlns='http://www.w3.org/2000/svg'>
            <circle cx="60" cy="60" r="55" style={{ strokeDashoffset: `calc(344px - (344px / 100) * ${timer})` }} />
          </svg>
        </div>
        {isSubmitting && (
          <div className="icon-success">
            <svg viewBox="0 0 50 45" xmlns='http://www.w3.org/2000/svg'>
              <path d="M20,42 L3,25" />
              <path d="M20,42 L47,3" />
            </svg>
          </div>
        )}
      </button>
     
    </div>
  );
};

export default Button;
