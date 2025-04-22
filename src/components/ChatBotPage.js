import React, { useEffect } from 'react';
import ChatBot from './ChatBot';
import '../styles/ChatBotPage.css';

function ChatBotPage({ onClose }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="chatbot-page">
      
      <div className="chatbot-wrapper">
        <ChatBot onClose={onClose} />
      </div>
      
      <div className="chatbot-page-footer">
        <p>This AI assistant can help with general questions. For specific issues, please contact support.</p>
      </div>
    </div>
  );
}

export default ChatBotPage;
