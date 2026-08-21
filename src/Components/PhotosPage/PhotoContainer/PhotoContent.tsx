import './PhotoContent.css';

function PhotoContent() {
    return (
        <>
            <div className="photo-content">
                <div className="photo-gallery">
                    <div className="column">
                        <img src="src/Assets/PhotosPage/candle.jpg" alt="Candle burning" className='photo'/>
                        <img src="src/Assets/PhotosPage/Alaska1.jpg" alt="Alaskan Mountains"/>
                        <img src="src/Assets/PhotosPage/mural.jpg" alt="Mural from Notre Dam"/>
                        <img src='src/Assets/PhotosPage/miotSunset.jpg' alt="Grey Mazda MX5 in the sunset"/>
                        <img src='src/Assets/PhotosPage/costaRica.jpg' alt="Costa Rican cove"/>
                    </div>
                    <div className="column">
                        <img src="src/Assets/PhotosPage/savannahChurch.jpg" alt="Church in Savannah Georgia "/>
                        <img src="src/Assets/PhotosPage/tobeFisheye2.jpg" alt="Fisheye closeup of my dachshund"/>
                        <img src="src/Assets/PhotosPage/tcRainbow.jpg" alt="08 Scion tC under a rainbow"/>
                        <img src="src/Assets/PhotosPage/chanelIsland2.jpg" alt="California Chanel Islands"/>
                        <img src="src/Assets/PhotosPage/grPrius.jpg" alt="2nd gen Toyota GR86 with a prius front bumper"/>
                    </div>
                    <div className="column">
                        <img src="src/Assets/PhotosPage/tobeSneak.jpg" alt="dachshund hiding under the bed"/>
                        <img src="src/Assets/PhotosPage/helen.jpg" alt="river flowing through Helen Georgia"/>
                        <img src="src/Assets/PhotosPage/lizard.jpg" alt="Leopard gecko sitting in his food bowl"/>
                        <img src='src/Assets/PhotosPage/canyon.jpg' alt="painted desert"/>
                        <img src='src/Assets/PhotosPage/bonsai.jpg' alt='My bonsai tree, a jade plant'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PhotoContent