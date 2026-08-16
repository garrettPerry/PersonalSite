import './WebringPanelStyle.css';

function Webring() {
return (
    <div className="panel panel-webring" style={{ gridArea: 'webring'}}>
        <div className="panel-header">
            <span>Webring</span>
        </div>
        <div className="panel-body">
            <img src='src/Assets/AssetPhotos/underConstruction.png'/>
        </div>
    </div>
)
}

export default Webring