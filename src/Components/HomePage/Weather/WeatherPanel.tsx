import { useEffect, useState } from 'react';
import './WeatherPanelStyle.css';
import { fetchWeatherApi } from "openmeteo";

//imports all weather icons, barely have a grasp on how this works but it does
const weatherIcons = Object.fromEntries(
    Object.entries(
        import.meta.glob('../../../Assets/AssetPhotos/WeatherIcons/*.png', {
            eager: true,
            import: 'default',
        })
    ).map(([path, url]) => [path.split('/').pop()!, url as string])
);

function WeatherPanel() {
    const [weatherData, setWeatherData] = useState<any>(null);
    const [weatherDataCelcius, setWeatherDataCelsius] = useState<any>(null);
    const [isFahrenheit, setIsFahrenheit] = useState(true);

    const activeWeatherData = isFahrenheit ? weatherData : weatherDataCelcius ?? weatherData;

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
        convertToCelcius(nextWeatherData);
    }
    //takes weather data, makes a copy, converts to C then formats
    function convertToCelcius(data: any) {
        //written this way to work with formatData()
        const celsiusData = {
            current: {
                temperature_2m: (data.current.temperature_2m - 32) * 5 / 9,
                apparent_temperature: (data.current.apparent_temperature - 32) * 5 / 9,
                relative_humidity_2m: data.current.relative_humidity_2m,
                wind_speed_10m: data.current.wind_speed_10m * 1.61,
                precipitation: data.current.precipitation * 2.54,
                is_day: data.current.is_day,
            },
            hourly: {
                precipitation_probability: data.hourly.precipitation_probability,
            }
        };
        setWeatherDataCelsius(formatData(celsiusData));
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
    //returns formatted data and correct unit
    function getWeatherData(input:string) {
        const data = activeWeatherData;
        const fahrenheitUnits = ["°F", "mph", "in"];
        const celsiusUnits = ["°C", "kph", "cm"];
        const correctUnits = isFahrenheit ? fahrenheitUnits : celsiusUnits;

        if (!data) {
            return "Loading..."
        }

        switch (input) {
            case "currentTemperature": 
                return data.currentTemperature + correctUnits[0];
            case "apparentTemperature":
                return data.apparentTemperature + correctUnits[0]; 
            case "humidity":
                return data.humidity + "%";
            case "windSpeed":
                return data.windSpeed + correctUnits[1];
            case "precipitation": 
                return data.precipitation + correctUnits[2];
            case "precipitationProbability":
                return data.precipitationProbability + "%";
            default:
                return "Loading...";
        }
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
        return <img src={weatherIcons[icon]} alt={alt} />;
    }

    function changeUnit() {
        setIsFahrenheit((prev) => !prev);
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
                        <button className="unitSelection" id="unitSelection" onClick={changeUnit}>
                            {isFahrenheit ? "°C" : "°F"}
                        </button>
                        <h1>{getWeatherData("currentTemperature")}</h1>
                        <p> Feels like: {getWeatherData("apparentTemperature")}</p>
                    </div>
                </div>
                <div className="weatherPanelBottom">
                    <div className="weatherPanelBottomLeft">
                        <p> Humidity: {getWeatherData("humidity")}</p>
                        <p> Wind Speed: {getWeatherData("windSpeed")}</p>

                    </div>
                    <div className="weatherPanelBottomRight">
                        <p> Precipitation: {getWeatherData("precipitation")}</p>
                        <p> Chance of rain: {getWeatherData("precipitationProbability")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherPanel