import React, { useState, useEffect } from 'react';
import '../styles/HEADesignerPage.css';

function HEADesignerPage() {
  const [element, setElement] = useState('hydrogen');
  const [phase, setPhase] = useState('solid');
  const [temperature, setTemperature] = useState('room');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState('');
  const [visibleChars, setVisibleChars] = useState(0);
  
  const finalText = "hello ntu";
  
  const handleGenerate = () => {
    setGeneratedText(finalText);
    setVisibleChars(0);
    setIsGenerating(true);
  };
  
  useEffect(() => {
    if (!isGenerating) return;
    
    if (visibleChars < finalText.length) {
      const timer = setTimeout(() => {
        setVisibleChars(prev => prev + 1);
      }, 100);
      
      return () => clearTimeout(timer);
    } else {
      setIsGenerating(false);
    }
  }, [isGenerating, visibleChars, finalText]);
  
  return (
    <div className="hea-designer-page">
      <div className="oracle-header">
        <h1>MATAI HEA Designer</h1>
        <p>Description area</p>
      </div>
      
      <div className="hea-controls">
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="element-select">Element:</label>
            <select
              id="element-select"
              value={element}
              onChange={(e) => setElement(e.target.value)}
            >
              <option value="hydrogen">Hydrogen</option>
              <option value="helium">Helium</option>
              <option value="lithium">Lithium</option>
              <option value="carbon">Carbon</option>
              <option value="oxygen">Oxygen</option>
            </select>
          </div>
          
          <div className="input-group">
            <label htmlFor="temperature-select">Temperature:</label>
            <select
              id="temperature-select"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            >
              <option value="cryogenic">Cryogenic</option>
              <option value="low">Low</option>
              <option value="room">Room temperature</option>
              <option value="high">High</option>
              <option value="extreme">Extreme</option>
            </select>
          </div>
        </div>
        
        <div className="input-row radio-group">
          <label>Physical Phase:</label>
          <div className="radio-options">
            <div className="radio-option">
              <input
                type="radio"
                id="phase-solid"
                name="phase"
                value="solid"
                checked={phase === 'solid'}
                onChange={() => setPhase('solid')}
              />
              <label htmlFor="phase-solid">Solid</label>
            </div>
            
            <div className="radio-option">
              <input
                type="radio"
                id="phase-liquid"
                name="phase"
                value="liquid"
                checked={phase === 'liquid'}
                onChange={() => setPhase('liquid')}
              />
              <label htmlFor="phase-liquid">Liquid</label>
            </div>
            
            <div className="radio-option">
              <input
                type="radio"
                id="phase-gas"
                name="phase"
                value="gas"
                checked={phase === 'gas'}
                onChange={() => setPhase('gas')}
              />
              <label htmlFor="phase-gas">Gas</label>
            </div>
            
            <div className="radio-option">
              <input
                type="radio"
                id="phase-plasma"
                name="phase"
                value="plasma"
                checked={phase === 'plasma'}
                onChange={() => setPhase('plasma')}
              />
              <label htmlFor="phase-plasma">Plasma</label>
            </div>
          </div>
        </div>
        
        <button 
          className="generate-button"
          onClick={handleGenerate}
          disabled={isGenerating}
        >
          {isGenerating ? 'Generating...' : 'Predict Properties'}
        </button>
      </div>
      
      {(isGenerating || generatedText) && (
        <div className="hea-result">
          <h2>Predicted Properties</h2>
          <div className="result-content">
            <p>
              {generatedText.substring(0, visibleChars)}
              {isGenerating && <span className="cursor">|</span>}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HEADesignerPage;
