import './VisitorPanelStyle.css';

function VisitorPanel() {
return (
    <div className="panel panel-visitor-counter" style={{gridArea: 'visitors'}}>
        <div className="panel-header">
            <span>Visitor Counter</span>
        </div>
        <div className="panel-body">
            <img src='src/Assets/AssetPhotos/underConstruction.png'/>
        </div>
  </div>
)
}

export default VisitorPanel