import './ProjectCardStyle.css';
import { useState } from 'react';

function ProjectsCard(
  props: {
    header: string;
    content: string;
    moreContent: string;
    mainPhoto: string;
    openZoom: (zoomedImage: string) => void;
  }
) {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  const handleImageClick = () => {
    props.openZoom(props.mainPhoto);
  };

  return (
    <div className={`project-card ${showMore ? 'project-card--expanded' : ''}`}>
      <div className="project-image" style={{ gridArea: 'project-image' }}>
        <img src={props.mainPhoto} alt="Project Image" onClick={handleImageClick} />
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



//remove new project image and css, need to have a div appear on hover that can display mulitple new images and select between them


// adds a new image to the page when the showMore variable =TRUE
// {showMore && (
//       <div className="project-image-2">
//         <img src="src/Assets/ProjectPhotos/NocTool.png" alt="Additional Project Image" />
