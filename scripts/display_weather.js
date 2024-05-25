
function displayTextGrid(locationName, tempCelsius, weatherCondition, weatherIcon){
    const textGrid = document.createElement('div');
    textGrid.setAttribute('id', 'text_grid');
    const location = document.createElement('p');
    location.innerText = locationName;
    location.setAttribute('id', 'location_name');
    const temperature = document.createElement('p');
    temperature.innerText = tempCelsius;
    temperature.setAttribute('id', 'temperature');
    const weather = document.createElement('div');
    weather.setAttribute('id', 'weather_cond_div');
    const weatherCond = document.createElement('p');
    weatherCond.innerText = weatherCondition;
    weatherCond.setAttribute('id', 'weather_condition');
    const weatherImage = new Image(24, 24);
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
        const weatherResults = document.getElementByClassName('weather_results');
        
        //weatherResults.appendChild(displayTextGrid(locationName, tempCelsius, weatherCondition, weatherIcon));
}

