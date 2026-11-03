import { useEffect, useState } from 'react';
import './WeatherPanelStyle.css';
import { fetchWeatherApi } from "openmeteo";


function WeatherPanel() {
    const [weatherData, setWeatherData] = useState<any>(null);
    //Runs on page load
    useEffect(() => {
        APICall();
        }, []);
  
    //from https://open-meteo.com/en/docs
    async function APICall() {
    
    const params = {
        latitude: 34.0515,
        longitude: -84.0713,
        hourly: "precipitation_probability",
        current: ["is_day", "temperature_2m", "relative_humidity_2m", "apparent_temperature", "precipitation", "wind_speed_10m"],
        forecast_days: 1,
        wind_speed_unit: "mph",
        temperature_unit: "fahrenheit",
        precipitation_unit: "inch",
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const current = response.current()!;
    const hourly = response.hourly()!;

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const nextWeatherData = {
        current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            is_day: current.variables(0)!.value(),
            temperature_2m: current.variables(1)!.value(),
            relative_humidity_2m: current.variables(2)!.value(),
            apparent_temperature: current.variables(3)!.value(),
            precipitation: current.variables(4)!.value(),
            wind_speed_10m: current.variables(5)!.value(),
        },
        hourly: {
            time: Array.from(
                { length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() }, 
                (_ , i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
            ),
            precipitation_probability: hourly.variables(0)!.valuesArray(),
        },
    };
        setWeatherData(formatData(nextWeatherData));
    }
    //shortens weatherData
    function formatData(data: any) {
        const currentTemperature = data.current.temperature_2m.toFixed(1);
        const apparentTemperature = data.current.apparent_temperature.toFixed(1);

        const humidity = data.current.relative_humidity_2m.toFixed(0);
        const windSpeed = data.current.wind_speed_10m.toFixed(0);
        
        const precipitation = data.current.precipitation.toFixed(0);
        const precipitationProbability = data.hourly.precipitation_probability[0].toFixed(0);

        const isDay = data.current.is_day;


        return {
            currentTemperature,
            humidity,
            windSpeed,
            apparentTemperature,
            precipitation,
            precipitationProbability,
            isDay
        };
    }

    //chooses the correct weather icon
    function chooseIcon() {
        if (!weatherData) return null;

        const rainChance = Number(weatherData.precipitationProbability);
        const temp = Number(weatherData.currentTemperature);

        let icon = "weatherSun.png";
        let alt = "Sunny";        
        
        //day or night
        if (weatherData?.isDay) {
            icon = "weatherDay.png";
            alt = "sunny icon"
        }
        else {
            icon = "weatherNight.png";
            alt = "night icon"
        }
        //rain & snow
        if (rainChance>20) {
            icon = "weatherRainLight.png";
            alt = "light rain icon"
            if (rainChance>60) {
                icon = "weatherRainHeavy.png";
                alt = "heavy rain icon"
            }
            if (temp<=32) {
                icon = "weatherSnow.png";
                alt = "snow icon"
            }
        }    
        return <img src={`src/Assets/AssetPhotos/WeatherIcons/${icon}`} alt={alt} />;
    }

    return (
        <div className="panel panel-weather" style={{ gridArea: 'weather' }}>
            <div className="panel-header">
                <span>weather</span>
                <span>Atlanta</span>
            </div>
            <div className="weatherPanelCard">
                <div className="weatherPanelTop">
                    <div className="weatherPanelTopLeft">
                        {chooseIcon()}
                    </div>
                    <div className="weatherPanelTopRight">
                        <h1>{weatherData ? `${weatherData.currentTemperature}°F` : "Loading..."}</h1>
                        <p> Feels like: {weatherData ? `${weatherData.apparentTemperature}°F` : "Loading...."}</p>
                    </div>
                </div>
                <div className="weatherPanelBottom">
                    <div className="weatherPanelBottomLeft">
                        <p> Humidity: {weatherData ? `${weatherData.humidity}%` : "Loading...."}</p>
                        <p> Wind Speed: {weatherData ? `${weatherData.windSpeed} mph` : "Loading...."}</p>

                    </div>
                    <div className="weatherPanelBottomRight">
                        <p> Precipitation: {weatherData ? `${weatherData.precipitation} in` : "Loading...."}</p>
                        <p> Chance of rain: {weatherData ? `${weatherData.precipitationProbability}%` : "Loading...."}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherPanel