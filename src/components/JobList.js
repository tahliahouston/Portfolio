import React, { useState } from 'react';
import "../styles/JobList.css";

const jobs = [
  {
    title: "Software Developer",
    company: "OOGI LABS",
    description: "Researched and developed applications(Web, iOS & Android) for a fleet management system that uses AI technology to aid in Driver and Vehicle safety.",
    duration: "JANUARY 2023 - Present"
  },
  {
    title: "Front-end Developer & Database Administrator",
    company: "TREE",
    description: "Created a SaaS solution with a team of 5 developers for an NGO to handle paperwork digitally.",
    duration: "JANUARY 2022 - DECEMBER 2022"
  }
];

const JobList = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="job-list-container">
      <div className="job-tabs">
        {jobs.map((job, index) => (
          <button
            key={index}
            className={`job-tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {job.company}
          </button>
        ))}
      </div>
      <div className="job-description">
        <h2>{jobs[activeTab].title}</h2>
        <h3>{jobs[activeTab].company}</h3>
        <p>{jobs[activeTab].description}</p>
        <p><em>{jobs[activeTab].duration}</em></p>
      </div>
    </div>
  );
};

export default JobList;