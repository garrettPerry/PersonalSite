import './ZoomedImageStyle.css';
import {useState} from "react";


function ZoomedImage(props: { imageArray: string[] }) {

function closeZoom() {
       var imageContainer = document.querySelector(".image-container") as HTMLElement;
       imageContainer.style.display = "none";
       arrayIncrement=0;
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


return (    
<div className="image-container" style={{display: "none"}}>
   <div className="image-foreground">
       <img src={props.imageArray[arrayIncrement]} alt="Zoomed Image" className="zoomed-image"/>
       <button className="nav-button-close" onClick={closeZoom}> X </button>
       <button className="nav-button-back" onClick={handlePrevious}> Previous </button>
       <button className="nav-button-next" onClick={handleNext}> Next </button>
       <div className="additional-image-container">
              <img src={props.imageArray[arrayIncrement+1]} alt="Additional Image" className="additional-image"/>
              <img src={props.imageArray[arrayIncrement+2]} alt="Additional Image" className="additional-image"/>
              <img src={props.imageArray[arrayIncrement+3]} alt="Additional Image" className="additional-image"/>
       </div>
   </div>
</div>
);
}

export default ZoomedImage;