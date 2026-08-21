import './ZoomedImageStyle.css';
import {useState} from "react";


function ZoomedImage(props: { imageArray: string[] }) {

function closeZoom() {
       var imageContainer = document.querySelector(".image-container") as HTMLElement;
       var imageNavigation = document.querySelector(".image-navigation") as HTMLElement;
       

       imageNavigation.style.display = "none";
       imageContainer.style.display = "none";
       setArrayIncrement(0);
}
var imageArray = props.imageArray;
var [arrayIncrement, setArrayIncrement] = useState(0);
//send current imageArray[i] and increase by 1 or flip to 0 if undefined
function handleNext() {
       if (imageArray[arrayIncrement+1] !== undefined) {
            setArrayIncrement(arrayIncrement + 1);
       }
       else { setArrayIncrement(0); }
}
function handlePrevious() {
       if (imageArray[arrayIncrement-1] !== undefined) {
              setArrayIncrement(arrayIncrement - 1);
       }
       else { setArrayIncrement(imageArray.length - 1); }
}

//click the button to minimize the additional images panel
function handleAdditionalImages() {
       var imageNavigation = document.querySelector(".image-navigation") as HTMLElement;
       var openImageNavigationButton = document.querySelector(".open-image-navigation") as HTMLElement;

       if (imageNavigation.style.display === "flex") {
              openImageNavigationButton.style.display = "block"; 
              imageNavigation.style.display = "none"; 
       } else {
              openImageNavigationButton.style.display = "none";
              imageNavigation.style.display = "flex";
       }
}

 //display image nav buttons if array is larger than 1
function doDisplayImageNav() {
      if (imageArray.length > 1) {
             return [<button className="open-image-navigation" onClick={handleAdditionalImages}> see more images </button>, 
              <button className="nav-button-next" onClick={handleNext}> Next </button>,
              <button className="nav-button-back" onClick={handlePrevious}> Previous </button>
             ];
      } 
      else { return false; }
}


return (    
<div className="image-container" style={{display: "none"}}>
   <div className="image-foreground">
       <img src={props.imageArray[arrayIncrement]} alt="Zoomed Image" className="zoomed-image"/>
       <button className="nav-button-close" onClick={closeZoom}> X </button>
       <div className="image-navigation" style={{ display: "none" }}>
              <button className="close-image-navigation" onClick={handleAdditionalImages}> see less </button>
              <div className="additional-image-container">
                     <img 
                     src={props.imageArray[arrayIncrement+1]} 
                     alt="Additional Image" 
                     className="additional-image"/>
                     <img src={props.imageArray[arrayIncrement+2]} 
                     alt="Additional Image" 
                     className="additional-image"/>
                     <img src={props.imageArray[arrayIncrement+3]} 
                     alt="Additional Image" 
                     className="additional-image"/>
              </div>
       </div>
       {doDisplayImageNav()} {/*shows image nav if needed*/}      
   </div>
</div>
);
}

export default ZoomedImage;