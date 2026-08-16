import { useEffect } from 'react';
import './WeatherPanelStyle.css';

function WeatherPanel() {
    useEffect(() => {
        if (document.getElementById('weatherwidget-io-js')) {
            return;
        }

        const script = document.createElement('script');
        script.id = 'weatherwidget-io-js';
        script.src = 'https://weatherwidget.io/js/widget.min.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="panel panel-weather" style={{ gridArea: 'weather' }}>
            <div className="panel-header">
                <span>weather</span>
            </div>
            <div className="weather-content">
                <img src='src/Assets/AssetPhotos/underConstruction.png'/>
                {/* <a
                    className="weatherwidget-io"
                    href="https://forecast7.com/en/33d75n84d39/atlanta/"
                    data-label_1="ATLANTA"
                    data-label_2="WEATHER"
                    data-theme="original"
                >
                    ATLANTA WEATHER
                </a> */}
            </div>
        </div>
    );
}

export default WeatherPanel