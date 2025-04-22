import './App.css';
import { useState, useEffect } from 'react';
import LoginModal from './components/LoginModal';
import LoadingAnimation from './components/LoadingAnimation';
import ChatBotPage from './components/ChatBotPage';
import HomePage from './components/HomePage';
import HEADesignerPage from './components/HEADesignerPage';
import OraclePage from './components/OraclePage';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); 

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  const handleHomeClick = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const handleChatButtonClick = () => {
    setCurrentPage('chat');
    window.scrollTo(0, 0);
  };

  const handleHEAButtonClick = () => {
    setCurrentPage('hea');
    window.scrollTo(0, 0);
  };

  const handleOracleButtonClick = () => {
    setCurrentPage('oracle');
    window.scrollTo(0, 0);
  };

  const handleCloseChatBot = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'chat':
        return <ChatBotPage onClose={handleCloseChatBot} />;
      case 'hea':
        return <HEADesignerPage />;
      case 'oracle':
        return <OraclePage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      {isLoading ? (
        <LoadingAnimation onComplete={handleLoadingComplete} />
      ) : (
        <>
          <div className="topbar">
            <div className="topbar-left">
              <img src="/logo.png" alt="Logo" className="logo" />
            </div>
            <div className="topbar-right">
              <div className="nav-buttons">
                <button 
                  className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}
                  onClick={handleHomeClick}
                >
                  Home
                </button>
                <button 
                  className={`nav-button ${currentPage === 'chat' ? 'active' : ''}`}
                  onClick={handleChatButtonClick}
                >
                  MATAI Chat
                </button>
                <button 
                  className={`nav-button ${currentPage === 'hea' ? 'active' : ''}`}
                  onClick={handleHEAButtonClick}
                >
                  MATAI HEA Designer
                </button>
                <button 
                  className={`nav-button ${currentPage === 'oracle' ? 'active' : ''}`}
                  onClick={handleOracleButtonClick}
                >
                  MATAI Oracle
                </button>
              </div>
              <div className="user-auth">
                {isLoggedIn ? (
                  <>
                    <span className="username">{username}</span>
                    <button onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <button onClick={handleLoginClick}>Login</button>
                )}
              </div>
            </div>
          </div>
          
          <div className="main-content">
            <PageTransition currentPage={currentPage}>
              {renderCurrentPage()}
            </PageTransition>
          </div>

          <Footer />

          <LoginModal 
            isOpen={isLoginModalOpen} 
            onClose={handleCloseModal} 
            onLogin={handleLogin}
          />
        </>
      )}
    </div>
  );
}

export default App;
