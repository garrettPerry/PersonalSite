import "./ViewSettingsStyle.css";
import "../ProjectCard/ProjectCardStyle.css"
import { useState } from "react";

function ViewSettings() {
    const [checkboxState, setCheckboxState] = useState('');
    const [sliderValue, setSliderValue] = useState('');

return (
    <div className="footer">
        <div className="checkbox-container">
            <label htmlFor="expandCheckbox"> Expand all </label>
            <input 
                type="checkbox" 
                id="expandCheckbox"
                onChange={e=>setCheckboxState(e.target.value)}
            />
        </div>
        <div className="slider-container">
            <label htmlFor="size">Panel Width</label>
            <input 
            type="range" 
            id="size" 
            min={50} max={150} 
            onChange={e=>setSliderValue(e.target.value)}
            />
        </div>
    </div>
);
}

export default ViewSettings


/* 

<label htmlFor="size"> Size (between 0 and 50): </label>

*/