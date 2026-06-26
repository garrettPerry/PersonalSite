import './ProjectsPanelStyle.css';
import { Link } from 'react-router-dom';

function ProjectsPanel() {
return (
    <div className="panel panel-projects" style={{gridArea: 'projects'}}>
    <div className="panel-header">
      <span>Projects</span>
      <span>Most Recent</span>    
    </div>
    <div className="project-card">    
      <img src="/src/Assets/AssetPhotos/tempProjectImage.png" alt="Project Image" className="project-image" style={{gridArea: 'project-image'}} />
      <div className="project-body" style={{gridArea: 'project-body'}}>
        <h3 className="project-title">Service Desk Remote Tool</h3>
        <div className="project-desc-box">
          A simple button panel winform application that I took over maintenance of in early 2025. Translated from Visual Basic 6 to C#. Constantly in use by my department for interfacing with other applications and links for daily tasks. <Link to='/projects'> Read more </Link>
        </div>
        <span className="project-date">2025-2026</span>
      </div>
    </div> 
  </div>
);
}

export default ProjectsPanel