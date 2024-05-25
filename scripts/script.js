
function displayTextGrid(locationName, tempCelsius, weatherCondition, weatherIcon){
    
    const textGrid = document.createElement('div');
    textGrid.setAttribute('id', 'text_grid');

    const location = document.createElement('p');
    location.innerText = locationName;
    location.setAttribute('id', 'location_name');

    const temperature = document.createElement('p');
    temperature.innerText = `${tempCelsius}°`;
    temperature.setAttribute('id', 'temperature');

    const weather = document.createElement('div');
    weather.setAttribute('id', 'weather_cond_div');

    const weatherCond = document.createElement('p');
    weatherCond.innerText = weatherCondition;
    weatherCond.setAttribute('id', 'weather_condition');

    const weatherImage = new Image(48, 48);
    weatherImage.src = weatherIcon;

    weather.appendChild(weatherCond);
    weather.appendChild(weatherImage);
    textGrid.appendChild(location);
    textGrid.appendChild(temperature);
    textGrid.appendChild(weather);

    return textGrid;
}

function displayWeather(locationName, tempCelsius, feelsLikeTemp, lastUpdated, weatherCondition,
    weatherIcon, windSpeed, windDir, pressure, humidity, timeOfDay, uvIndex){
        const weatherResults = document.querySelector('.weather_results');
        const existingGrid = document.getElementById('text_grid');

        if(existingGrid){
            weatherResults.removeChild(existingGrid);
        }
        const newTextGrid = displayTextGrid(locationName, tempCelsius, weatherCondition, weatherIcon);
        weatherResults.appendChild(newTextGrid);
}

function getWeather(){
    const cityInput = document.getElementById('city');
    const weatherForm = document.getElementById('weather_form');

    weatherForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const city = cityInput.value;

        async function sendAPIRequest(){
            try{
                const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=a4bab67373f748ed86224210240102&q=${city}`, {mode: 'cors'});
                const weatherData = await response.json();
                const locationName = weatherData.location.name;
                const tempCelsius = weatherData.current.temp_c;
                const feelsLikeTemp = weatherData.current.feelslike_c;
                const lastUpdated = weatherData.current.last_updated;
                const weatherCondition = weatherData.current.condition.text;
                const weatherIcon = weatherData.current.condition.icon;
                const windSpeed = weatherData.current.wind_mph;
                const windDir = weatherData.current.wind_dir;
                const pressure = weatherData.current.pressure_in;
                const humidity = weatherData.current.humidity;
                const timeOfDay = weatherData.current.is_day;
                const uvIndex = weatherData.current.uv;

                displayWeather(locationName, tempCelsius, feelsLikeTemp, lastUpdated, weatherCondition,
                    weatherIcon, windSpeed, windDir, pressure, humidity, timeOfDay, uvIndex);
            } catch(error) {
                console.log(error);
            }
        }
        sendAPIRequest();
    });
}

getWeather();

