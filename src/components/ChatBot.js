import React, { useState, useRef, useEffect } from 'react';
import '../styles/ChatBot.css';

function ChatBot({ onClose }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm MATAI Chat. How can I assist you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      });
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { id: messages.length + 1, text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const botMessage = { id: messages.length + 2, text: 'Hello!', isBot: true };
      setMessages(prev => [...prev, botMessage]);
    }, 600);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h2>MATAI Chat</h2>
      </div>
      <div className="messages-container">
        {messages.map(message => (
          <div 
            key={message.id} 
            className={`message ${message.isBot ? 'bot' : 'user'}`}
          >
            {message.isBot && (
              <div className="bot-avatar">AI</div>
            )}
            <div className="message-bubble">
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className="input-container" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatBot;
