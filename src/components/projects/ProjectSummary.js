import React from 'react';

function ProjectSummary({ project }) {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by Clay Tang</p>
        <p className="grey-text">1st January, 2pm</p>
      </div>
    </div>
  )
}

export default ProjectSummary;