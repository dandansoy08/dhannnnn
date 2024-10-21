// src/App.jsx
import React from 'react';
import './styles.css';  // Import the style

/* From Uiverse.io by barisdogansutcu */ 

const App = () => {
  return (
    <div className="app">
      {/* Navigation */}
      <header className="navbar">
      <img src="/images/ii.jpg" />
        
        <nav>
          <ul>
          <li><a href="#hero">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#project">PROJECT</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero"
      
      >
        <div className="hero-content">
        <img src="/images/ii.jpg" />
          <h1><button alt="DHAN FRANK MIRANDA">
  <i>W</i>
  <i>E</i>
  <i>B</i>  
  <i>&nbsp;</i>
  <i>D</i>
  <i>E</i>
  <i>S</i>
  <i>I</i>
  <i>G</i>
  <i>N</i>
  <i>E</i>
  <i>R</i>

</button>
</h1>
        <p>Web design is not just about aesthetics; it's fundamentally about functionality and user experience. Good design is intuitive and transparent, ensuring that websites not only look appealing but also serve their purpose effectively.</p>
          
         
          
        </div>
        <div className="hero-image">
        
        
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
      <img src="/images/dd.jpg" alt = "Web Design"/>
        <h2>FULL-STACK DEVELOPER</h2>
        <p>passion for designing and building end-to-end web and mobile applications. My expertise spans across both front-end and back-end technologies, allowing me to deliver complete, user-centric solutions.
           With a focus on clean code, performance optimization, and scalability, I enjoy turning complex problems into simple, intuitive applications.</p>
      
      </section>

      {/* Project Section */}
      <section id="project" className="project">
  <h2>MY PROJECT</h2>
  <div className="project-cards">
    <div className="card">
      <img src="/images/aa.png"  />
    </div>

    <div className="card">
      <img src="/images/as.png"  />
    </div>

    <div className="card">
      <img src="/images/ad.png"  />
    </div>
  </div>
</section>


<section id="contact" class="contact">
  <h2>CONTACT ME</h2>
  <p>Email: <a href="miranda.dhan11q@gmail.com">miranda.dhan11q@gmail.com</a></p>
  <p>Phone: (63) 9855499804</p>
  <p>Facebook: <a href="https://www.facebook.com/dhan.miranda.7?mibextid=ZbWKwL">Dhan Parrenas Miranda</a></p>
</section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Dhan Frank Miranda - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;