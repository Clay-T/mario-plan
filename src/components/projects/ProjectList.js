import React from 'react';
import { useSelector } from 'react-redux';
import ProjectSummary from './ProjectSummary';

function ProjectList() {
  const { projects } = useSelector(state => state.project);

  return (
    <div className="project-list section">
      {projects && projects.map(project => {
        return <ProjectSummary project={project} key={project.id} />
      })}
    </div>
  )
}

export default ProjectList;
