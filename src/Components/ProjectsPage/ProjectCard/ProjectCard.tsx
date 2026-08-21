import './ProjectCardStyle.css';
import { useState } from 'react';

function ProjectsCard(
  props: {
    header: string;
    content: string;
    moreContent: string;
    photoArray: string[];
    openZoom: (zoomedImage: string[]) => void;
  }
) {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  const handleImageClick = () => {
    props.openZoom(props.photoArray);
  };

  return (
    <div className={`project-card ${showMore ? 'project-card--expanded' : ''}`}>
      <div className="project-image" style={{ gridArea: 'project-image' }}>
        <img src={props.photoArray[0]} alt="Project Image" onClick={handleImageClick} />
      </div>
    
    <div className="project-body" style={{gridArea: 'project-body'}}>
      <h3 className="project-title">{props.header}</h3>
      <div className="project-desc-box">
        <p>{/* pressing the button makes the dots disappear and adds moreContent*/}
          {props.content}
          <span id="dots" style={{display: showMore ? 'none' : 'inline'}}>... 
          </span>
          <span id="more" style={{display: showMore ? 'inline' : 'none'}}> {props.moreContent}
          </span> 
          <button onClick={toggleReadMore} id="viewMoreButton"> 
          {showMore ? 'Read less' : 'Read more'}
        </button>
        </p>
        
      </div>
      <span className="project-date">2025-2026</span>
    </div>
  </div> 


);
}

export default ProjectsCard



