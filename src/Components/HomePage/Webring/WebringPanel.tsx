import './WebringPanelStyle.css';
import underConstructionImage from '../../../Assets/AssetPhotos/underConstruction.png';

function Webring() {
return (
    <div className="panel panel-webring" style={{ gridArea: 'webring'}}>
        <div className="panel-header">
            <span>Webring</span>
        </div>
        <div className="panel-body">
            <img src={underConstructionImage} alt="Under construction placeholder" />
        </div>
    </div>
)
}

export default Webring