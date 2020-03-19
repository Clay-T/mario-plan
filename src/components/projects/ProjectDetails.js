import React from 'react'

function ProjectDetails({ match }) {
  const id = match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium impedit aperiam aspernatur illo voluptatum officiis vero ipsam voluptate dolorem laborum nesciunt nostrum nobis tempore, quas dolore minus repellendus rem quasi!</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Clay Tang</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
