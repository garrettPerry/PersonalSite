import './WeatherPanelStyle.css';

function WeatherPanel() {
return(
    <div className="panel panel-weather" style={{gridArea: 'weather'}}>
        <div className="panel-header">
            <span>weather</span>
        </div>
        <div className="weather-content">
       
        </div>
    </div>
)
}

export default WeatherPanel