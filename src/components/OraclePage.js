import React, { useState, useEffect } from 'react';
import '../styles/OraclePage.css';

function OraclePage() {
  const [inputText, setInputText] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');
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
    <div className="oracle-page">
      <div className="hea-header">
        <h1>MATAI Oracle</h1>
        <p>Description area</p>
      </div>      
      <div className="oracle-controls">
        <div className="input-group">
          <label htmlFor="oracle-text-input">Enter Domain or Keywords:</label>
          <textarea 
            id="oracle-text-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter the domain or keywords you want to know about..."
            rows={4}
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="oracle-option-select">Assessment Type:</label>
          <select
            id="oracle-option-select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="option1">Test Option</option>
            <option value="option2">Another Test Option</option>
          </select>
        </div>
        
        <button 
          className="generate-button"
          onClick={handleGenerate}
          disabled={isGenerating || !inputText.trim()}
        >
          {isGenerating ? 'Generating...' : 'Generate Assessment'}
        </button>
      </div>
      
      {(isGenerating || generatedText) && (
        <div className="oracle-result">
          <h2>Generated Assessment</h2>
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

export default OraclePage;
