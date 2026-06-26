import './ProjectCardStyle.css';
import '../ViewSettings/ViewSettings';
import { useState } from 'react';

function ProjectsCard() {

  const [number, setNumber] = useState(0);
  const increaseCount = () => {
      setNumber(prevCount => prevCount + 1)
  };

return (
    <div className="panel panel-projects" style={{gridArea: 'projects'}}>
    
    <div className="project-card">    
      <img src="/src/Assets/AssetPhotos/tempProjectImage.png" alt="Project Image" className="project-image" style={{gridArea: 'project-image'}} />
      <div className="project-body" style={{gridArea: 'project-body'}}>
        <h3 className="project-title">Service Desk Remote Tool</h3>
        <div className="project-desc-box">
          A simple button panel winform application that I took over maintenance of in early 2025. Translated from Visual Basic 6 to C#. Constantly in use by my department for interfacing with other applications and links for daily tasks. 
          <button onClick={increaseCount}> 
            Read more { number }
          </button>
        </div>
        <span className="project-date">2025-2026</span>
        <p> </p>
      </div>
    </div> 
  </div>
);
}

export default ProjectsCard

