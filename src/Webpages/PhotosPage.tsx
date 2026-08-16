import NavBar from '../Components/HomePage/NavBar/NavBar.tsx';
import PhotoContent from "../Components/PhotosPage/PhotoContainer/PhotoContent.tsx"


const imageArray = [
    "src/Assets/AssetPhotos/Gandalf.png",
    "src/Assets/AssetPhotos/Corkboard.png",
    "src/Assets/AssetPhotos/ConcreteTexture.jpg"
];

function PhotosPage() {
    return (
        <div>
            
            <PhotoContent/>
        </div>
    );
}

export default PhotosPage;