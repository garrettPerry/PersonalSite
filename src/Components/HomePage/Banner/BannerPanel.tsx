import '/src/App.css';
import './BannerPanelStyle.css';

function BannerPanel() {
return(
    <div className="panel panel-banner" style={{ gridArea: 'banner' }}>
        <div className="panel-header">
        <span>Feature</span>
        </div>
        <div className="banner-content">
            <img src="src/Assets/AssetPhotos/BannerImage.png" alt="Banner Image"/>
        </div>
    </div>

) 
}

export default BannerPanel