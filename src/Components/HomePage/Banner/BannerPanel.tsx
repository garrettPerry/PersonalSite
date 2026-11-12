import '/src/App.css';
import './BannerPanelStyle.css';
import bannerImage from '../../../Assets/AssetPhotos/BannerImage.png';

function BannerPanel() {
return(
    <div className="panel panel-banner" style={{ gridArea: 'banner' }}>
        <div className="panel-header">
        <span>Feature</span>
        </div>
        <div className="banner-content">
            <img src={bannerImage} alt="Banner Image"/>
        </div>
    </div>

) 
}

export default BannerPanel