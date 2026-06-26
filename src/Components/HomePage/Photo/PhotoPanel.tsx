import './PhotoPanelStyle.css';

function PhotoPanel() {
return(
  <div className="panel panel-photo" style={{ gridArea: 'photo'}}>
    <div className="panel-header">
      <span>Photo of the Day</span>
    </div>
    <div className="photo-content">
      <img src="src/Assets/PhotoOfTheDay/groupcar2.jpg" alt="Photo of the Day"/>
      <div className="photo-description"> May 25th 2024 </div>
    </div>
  </div>

)
}

export default PhotoPanel