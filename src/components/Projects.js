import React from 'react';
import "../styles/Projects.css";
import FadeInSection from "./FadeInSection";

const projects = [
  {
    title: "Sentiment Analysis",
    description: "A Python app that allow users to input text and receive sentiment analysis results in real-time using AI",
    languages: ["Python", "HTML"]
  },
  {
    title: "Weather App",
    description: "A simple weather application using the Openweather API",
    languages: ["Javascript", "CSS", "HTML"]
  },
  {
    title: "Fleet Management App",
    description: "Fleet Management, allowing users to create vehicles and fleets.",
    languages: ["Dart", "BLoC", "SQL", "C#", "REST API"]
  }
];

const Projects = () => {
  return (<div id='projects'>
    <FadeInSection>
    <div className='section-header'>
    <h1 className="about-heading">/ projects</h1>
    </div>
    <div className="projects-container">
        
      {projects.map((project, index) => (
        <div key={index} className="project-tile">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-languages">
            {project.languages.map((language, langIndex) => (
              <span key={langIndex} className="project-language">{language}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
    </FadeInSection>
    </div>
  );
};

export default Projects;