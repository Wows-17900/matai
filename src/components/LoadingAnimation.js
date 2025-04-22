import React, { useState, useEffect } from 'react';
import '../styles/LoadingAnimation.css';

function LoadingAnimation({ onComplete }) {
  const text = "NTU MATAI"; 
  const [visibleChars, setVisibleChars] = useState(0);
  
  useEffect(() => {
    const charInterval = setInterval(() => {
      setVisibleChars(prev => {
        if (prev < text.length) {
          return prev + 1;
        } else {
          clearInterval(charInterval);
          return prev;
        }
      });
    }, 50); 
    
    const completionTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, (text.length * 100) + 500 + 300); 
    
    return () => {
      clearInterval(charInterval);
      clearTimeout(completionTimer);
    };
  }, [text, onComplete]);
  
  return (
    <div className="loading-animation">
      <div className="loading-text">
        {text.split('').map((char, index) => (
          <span 
            key={index} 
            className={`char ${index < visibleChars ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LoadingAnimation;
