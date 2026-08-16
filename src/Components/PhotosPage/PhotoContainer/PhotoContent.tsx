import { Link } from 'react-router-dom';
import './PhotoContent.css';

function PhotoContent() {
    return(
        <div className="photo-content">
            <div className="titleBar">
                <Link to="/"> Go back ↩︎</Link>
                <h2 className="title"> Photo Gallery </h2>
            </div>
            <div className="photo-gallery">
                <div className="column">
                    <div className="photo">
                        <img src="src/Assets/PhotosPage/candle.jpg" alt=""/>
                    </div>
                    <div className="photo">
                        <img src="src/Assets/PhotosPage/Alaska1.jpg" alt=""/>
                    </div>
                    <div className="photo">
                        <img src="src/Assets/PhotosPage/mural.jpg" alt=""/>
                    </div>
                </div>
                <div className="column">
                    <div className="photo">
                        <img src="src/Assets/PhotosPage/savannahChurch.jpg" alt=""/>
                    </div>
                    <div className="photo">
                        <img src="src/Assets/PhotosPage/tobeFisheye2.jpg" alt=""/>
                    </div>
                    <div className="photo">
                        <img src="src/Assets/PhotosPage/tcRainbow.jpg" alt=""/>
                    </div>
                </div>
                <div className= "column">
                    <div className="photo">
                        <img src="src/Assets/PhotosPage/tobeSneak.jpg" alt=""/>
                    </div>
                    <div className="photo">
                        <img src="src/Assets/PhotosPage/helen.jpg" alt=""/>
                    </div>
                    <div className="photo">
                        <img src="src/Assets/PhotosPage/lizard.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default PhotoContent