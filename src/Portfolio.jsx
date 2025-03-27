import React from "react";
import "./Portfolio.css"; // Make sure to create a CSS file for better styling

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>John Doe</h1>
        <p>Creative Developer & Designer</p>
      </header>

      <div className="hero-section">
        <img
          className="profile-img"
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
        />
        <p className="hero-text">Building immersive and interactive digital experiences.</p>
      </div>

      <section className="about-section">
        <h2>About Me</h2>
        <p>Hi! I'm John, a passionate web developer focused on crafting engaging user experiences. I specialize in front-end technologies, UI/UX design, and innovative web solutions.</p>
      </section>

      <section className="projects-section">
        <h2>My Projects</h2>
        <div className="project-list">
          {["E-Commerce Platform", "Creative Portfolio", "Blogging Hub", "Photography Showcase"].map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project}</h3>
              <p>A cutting-edge web project utilizing modern technologies.</p>
              <button className="view-btn">View Project</button>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-list">
          {["HTML5", "CSS3", "JavaScript", "React", "UI/UX Design", "Node.js"].map((skill, index) => (
            <span key={index} className="skill-badge">{skill}</span>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Me</h2>
        <p>If you'd like to work with me, feel free to reach out via email at <a href="mailto:john.doe@example.com">john.doe@example.com</a>.</p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 John Doe. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;