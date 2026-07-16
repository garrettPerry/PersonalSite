import {useState} from "react";
function PhotoContent(props: {imageArray: string[]}) {

    var imageArray = props.imageArray;
    var [arrayIncrement, setArrayIncrement] = useState(0);
    //send current imageArray[i] and increase by 1 or flip to 0 if undefined
    function handleNext() {
        if (imageArray[arrayIncrement+1] !== undefined) {
            setArrayIncrement(arrayIncrement + 1);
        }
        else
        {
            setArrayIncrement(0);
        }
    }

    //invert above
    function handlePrevious() {
        if (imageArray[arrayIncrement-1] !== undefined) {
            setArrayIncrement(arrayIncrement - 1);
        }
        else
        {
            setArrayIncrement(imageArray.length - 1);
        }
    }


    return(
        <div>
            <div className="header">
                <h1>Photo Gallery</h1>
                <p>The goal of this page is to send in multiple images and be able to scroll through them. ACHIEVED </p>
            </div>
            <div className="content">
                <img src={imageArray[arrayIncrement]} alt="Photo 1" />
                <button onClick={handlePrevious}> Previous </button>
                <button onClick={handleNext}> Next </button>

                <p> {arrayIncrement} </p>
                <p> {imageArray[arrayIncrement]} </p>
            </div>
        </div>
    );
}

export default PhotoContent