import './PhotoPanelStyle.css';
import { useEffect, useState } from 'react';

//imports every photo in the folder
const imageModules = import.meta.glob('../../../Assets/Photos/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

const allImages = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => [path.split('/').pop()!, url as string])
);

const imageSources = Object.keys(allImages);

function PhotoPanel() {
  const [currentPhoto, setCurrentPhoto] = useState<string | null>(null);

  useEffect(() => {
    getPhoto();
  }, []);

  function getPhoto() {
    const date = new Date();
    const photoNumber = (date.getFullYear() * (date.getMonth() + 1) + date.getDate()) % imageSources.length;
    const imageSource = imageSources[photoNumber];

    setCurrentPhoto(allImages[imageSource]);
  }
 
  function randomizeImage() {
    let photoNumber = (Math.random()*100)%imageSources.length;
    photoNumber = Math.round(photoNumber);

    const imageSource = imageSources[photoNumber];
    
    setCurrentPhoto(allImages[imageSource]);
    console.log(currentPhoto)
  }

  function nextImage() {
    //FIX
    let currentPhotoIndex = allImages.indexOf(currentPhoto)+1;
  }

  return(
    <div className="panel panel-photo" style={{ gridArea: 'photo'}}>
      <div className="panel-header">
        <span>Photo of the Day</span>
      </div>
      <div className="photo-of-the-day">
        {currentPhoto && <img src={currentPhoto} alt="Photo of the Day" className='feature-photo' />}
        <div className="photo-description"> 
          <button onClick={randomizeImage}> previous </button>
          <button onClick={randomizeImage}> random </button>
          <button onClick={randomizeImage}> next </button>
        </div>
      </div>
    </div>
  )
}

export default PhotoPanel