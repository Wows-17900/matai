import React, { useState, useEffect } from 'react';
import '../styles/PageTransition.css';

function PageTransition({ children, currentPage }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  
  useEffect(() => {
    if (children.type !== displayChildren.type) {
      setTransitionStage('fadeOut');
      
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage('fadeIn');
      }, 300); 
      
      return () => clearTimeout(timer);
    }
  }, [children, displayChildren]);
  
  return (
    <div className={`page-transition ${transitionStage}`}>
      {displayChildren}
    </div>
  );
}

export default PageTransition;
