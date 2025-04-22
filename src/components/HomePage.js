import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';

function HomePage() {
  const [ntuNews, setNtuNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const mockNtuNews = [
        {
          id: 1,
          title: "NTU Singapore scientists develop AI-powered tool to improve diagnosis of eye diseases",
          content: "Scientists from Nanyang Technological University, Singapore (NTU Singapore) have developed an artificial intelligence (AI) tool that can help doctors diagnose eye diseases more accurately.",
          image: "/Sample.png", 
          url: "https://www.ntu.edu.sg/news/detail/ntu-singapore-scientists-develop-ai-powered-tool-to-improve-diagnosis-of-eye-diseases"
        },
        {
          id: 2,
          title: "NTU Singapore scientists develop sustainable concrete using recycled glass",
          content: "Scientists from NTU Singapore have developed a new type of concrete using recycled glass that is stronger and more eco-friendly than regular concrete.",
          image: "/Sample.png",
          url: "https://www.ntu.edu.sg/news/detail/ntu-singapore-scientists-develop-sustainable-concrete-using-recycled-glass"
        },
        {
          id: 3,
          title: "NTU Singapore launches new institute for science and technology law",
          content: "NTU Singapore has launched a new institute that will drive research and education in science and technology law, and help Singapore develop legal frameworks for emerging technologies.",
          image: "/Sample.png", 
          url: "https://www.ntu.edu.sg/news/detail/ntu-singapore-launches-new-institute-for-science-and-technology-law"
        },
        {
          id: 4,
          title: "NTU Singapore partners with industry leaders on maritime decarbonisation",
          content: "Nanyang Technological University, Singapore is collaborating with major maritime industry partners to develop solutions for reducing carbon emissions in shipping.",
          image: "/Sample.png", 
          url: "https://www.ntu.edu.sg/news/detail/ntu-singapore-partners-with-industry-leaders-on-maritime-decarbonisation"
        },
        {
          id: 5,
          title: "NTU Singapore researchers develop new method to produce hydrogen fuel from water",
          content: "Scientists at NTU Singapore have developed a sustainable method to produce hydrogen fuel from water, bringing clean energy solutions one step closer to widespread adoption.",
          image: "/Sample.png", 
          url: "https://www.ntu.edu.sg/news/detail/ntu-singapore-researchers-develop-new-method-to-produce-hydrogen-fuel-from-water"
        },
        {
          id: 6,
          title: "NTU Singapore launches new AI research centre",
          content: "Nanyang Technological University, Singapore has established a new research centre focused on developing responsible AI technologies for society and industry applications.",
          image: "/Sample.png", 
          url: "https://www.ntu.edu.sg/news/detail/ntu-singapore-launches-new-ai-research-centre"
        }
      ];
      
      setNtuNews(mockNtuNews);
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="home-page">
      <section className="news-section">
        <h2>NTU News</h2>
        {isLoading ? (
          <div className="loading-indicator">Loading NTU news...</div>
        ) : (
          <>
            <div className="news-grid">
              {ntuNews.map(item => (
                <div className="news-item" key={item.id}>
                  <div className="news-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="news-content">
                    <h3 className="news-title">{item.title}</h3>
                    <p className="news-text">{item.content}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="read-more">
                      Read full article
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="attribution">
              Source: <a href="https://www.ntu.edu.sg/news" target="_blank" rel="noopener noreferrer">NTU Singapore News & Events</a>
            </div>
            <button className="more-button" onClick={() => window.open('https://www.ntu.edu.sg/news', '_blank')}>
              More NTU News
            </button>
          </>
        )}
      </section>
      
      <section className="about-section">
        <h2>About MATAI Project</h2>
        <p>The MATAI Project at Nanyang Technological University represents our commitment to advancing the frontiers of Material Science through Artificial Intelligence. By combining cutting-edge AI techniques with deep domain expertise, we're developing innovative solutions to complex material engineering challenges.</p>
        <p>Our interdisciplinary team of researchers is dedicated to creating AI models that can predict material properties, accelerate discovery processes, and optimize performance characteristics. Through machine learning, deep neural networks, and data-driven approaches, we aim to revolutionize how materials are designed, synthesized, and utilized in real-world applications.</p>
        <p>The future of materials science lies at the intersection of computational power and scientific knowledge. At MATAI, we're building that future today.</p>
      </section>
    </div>
  );
}

export default HomePage;
